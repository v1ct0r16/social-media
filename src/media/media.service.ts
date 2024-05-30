import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './entities/media.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { title } from 'process';

@Injectable()
export class MediaService {

  constructor(
    @InjectRepository(Media) private readonly mediaRepository:Repository<Media>
  ) {}

  createpost(createMediaDto: CreateMediaDto) {
       const add = this.mediaRepository.create(createMediaDto);
        return this.mediaRepository.save(add);
    // return 'This action adds a new media';
  }

  async findAll() {
    try {
      const findAll = await this.mediaRepository.find();
      return findAll;
    } catch (error) {
      throw new NotFoundException('Failed to Retrieve post');
    }
    // return `This action returns all media`;
  }

  async findOneByName(title :string): Promise<Media>{
        const find = await this.mediaRepository.findOne({ where: {title: title},});
        return(find)

  }

  findOne(id: string) {
    return `This action returns a #${id} media`;
  }


  async updateProductByName(
    name: string,
    payload: Partial<Media>,
): Promise<Media> {
    const user = await this.mediaRepository.findOne({ where: { title } });
    if (!user) {
        throw new HttpException('Product not found', 404); // it will be a  404 eroor, meaning not found
    }
//Merge the payload into the existing product entity
Object.assign(user, payload);
return this.mediaRepository.save(user)
} 

  async  deletePost(title: string){
    try {
      const deleteIt = await this.mediaRepository.delete(title);
      if(!deleteIt) {
        throw new NotFoundException(`Sale with ID ${title} not found`);
      }
      return deleteIt

    }catch (error) {
      throw new NotFoundException(`Item not found`);
    }
  }
}
