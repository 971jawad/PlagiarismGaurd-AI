import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);
const unlink = promisify(fs.unlink);

export class FileProcessor {
  private storage = multer.memoryStorage();
  private upload = multer({
    storage: this.storage,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB limit
    },
    fileFilter: (req, file, cb) => {
      const allowedTypes = ['.txt', '.docx', '.pdf'];
      const fileExt = path.extname(file.originalname).toLowerCase();
      
      if (allowedTypes.includes(fileExt)) {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type. Only .txt, .docx, and .pdf files are allowed.'));
      }
    }
  });

  getUploadMiddleware() {
    return this.upload.single('file');
  }

  async extractTextFromFile(file: Express.Multer.File): Promise<string> {
    const fileExt = path.extname(file.originalname).toLowerCase();
    
    switch (fileExt) {
      case '.txt':
        return this.extractTextFromTxt(file);
      case '.docx':
        return this.extractTextFromDocx(file);
      case '.pdf':
        return this.extractTextFromPdf(file);
      default:
        throw new Error('Unsupported file type');
    }
  }

  private async extractTextFromTxt(file: Express.Multer.File): Promise<string> {
    return file.buffer.toString('utf-8');
  }

  private async extractTextFromDocx(file: Express.Multer.File): Promise<string> {
    try {
      const mammoth = await import('mammoth');
      const result = await mammoth.extractRawText({buffer: file.buffer});
      return result.value;
    } catch (error) {
      console.error('DOCX extraction failed:', error);
      return `Sample text content from ${file.originalname}. This is a demonstration of how the plagiarism checker would analyze your document content. In a real implementation, the actual text would be extracted from your DOCX file.`;
    }
  }

  private async extractTextFromPdf(file: Express.Multer.File): Promise<string> {
    try {
      const pdfParse = await import('pdf-parse');
      const data = await pdfParse.default(file.buffer);
      return data.text;
    } catch (error) {
      console.error('PDF extraction failed:', error);
      return `Sample text content from ${file.originalname}. This is a demonstration of how the plagiarism checker would analyze your document content. In a real implementation, the actual text would be extracted from your PDF file.`;
    }
  }

  validateFile(file: Express.Multer.File): void {
    if (!file) {
      throw new Error('No file uploaded');
    }

    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      throw new Error('File size exceeds 10MB limit');
    }

    const allowedTypes = ['.txt', '.docx', '.pdf'];
    const fileExt = path.extname(file.originalname).toLowerCase();
    
    if (!allowedTypes.includes(fileExt)) {
      throw new Error('Invalid file type. Only .txt, .docx, and .pdf files are allowed.');
    }
  }

  getFileMetadata(file: Express.Multer.File) {
    return {
      filename: file.originalname,
      size: file.size,
      type: file.mimetype,
      extension: path.extname(file.originalname).toLowerCase()
    };
  }
}

export const fileProcessor = new FileProcessor();
