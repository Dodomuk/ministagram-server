import { ApiProperty } from '@nestjs/swagger';

export class UserRequestDto {
    @ApiProperty({ description: '이름' })
    firstName!: string;

    @ApiProperty({ description: '성' })
    lastName!: string;
}