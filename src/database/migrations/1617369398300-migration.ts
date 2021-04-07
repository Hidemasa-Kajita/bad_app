import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1617369398300 implements MigrationInterface {
    name = 'migration1617369398300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(128) NOT NULL, `email` varchar(256) NOT NULL, `password` varchar(32) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `articles` (`id` int NOT NULL AUTO_INCREMENT, `user_id` int NOT NULL, `title` varchar(128) NOT NULL, `contents` varchar(256) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `articles` ADD CONSTRAINT `FK_87bb15395540ae06337a486a77a` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `articles` DROP FOREIGN KEY `FK_87bb15395540ae06337a486a77a`");
        await queryRunner.query("DROP TABLE `articles`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
