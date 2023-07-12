import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    isJoin: boolean;

    // Entity 확장 예시
    // @OneToMany(type => Photo, photo => photo.user)
    // photos: Photo[];
}