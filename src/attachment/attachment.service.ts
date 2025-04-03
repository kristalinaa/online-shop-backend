import { Injectable } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { AttachmentRepository } from './attachment.repository';
import { Product } from 'src/product/entities/product.entity';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { Attachment } from './entities/attachment.entity';
@Injectable()
export class AttachmentService {

  constructor(
    private attachmentRepository: AttachmentRepository
  ){

  }


  private readonly fileStoragePath = join(__dirname, '../../src/files'); // Save inside src/files

  async saveFilesToLocalPath(files: Array<Express.Multer.File>) {
    const savedFiles: Attachment[] = []
    try {
      // Ensure directory exists
      await mkdir(this.fileStoragePath, { recursive: true });

      for (const file of files) {
        const filePath = join(this.fileStoragePath, file.originalname);

        // Save file to local storage
        await writeFile(filePath, file.buffer);
        const savedFile = await this.attachmentRepository.save({
          fileName: file.originalname,
          path: filePath,
        })

        savedFiles.push(savedFile)
      }

      return savedFiles;
    } catch (error) {
      console.error('Error saving files:', error);
      throw new Error('Failed to save files');
    }
  }


  findAll() {
    return `This action returns all attachment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attachment`;
  }

  update(id: number, updateAttachmentDto: UpdateAttachmentDto) {
    return `This action updates a #${id} attachment`;
  }

  remove(id: number) {
    return `This action removes a #${id} attachment`;
  }
}
