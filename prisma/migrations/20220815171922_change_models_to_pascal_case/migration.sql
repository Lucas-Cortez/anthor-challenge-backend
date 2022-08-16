-- DropForeignKey
ALTER TABLE `avaliation` DROP FOREIGN KEY `avaliation_movie_id_fkey`;

-- DropForeignKey
ALTER TABLE `avaliation` DROP FOREIGN KEY `avaliation_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `comment_avaliation_id_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `comment_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `watched_movie` DROP FOREIGN KEY `watched_movie_movie_id_fkey`;

-- DropForeignKey
ALTER TABLE `watched_movie` DROP FOREIGN KEY `watched_movie_user_id_fkey`;

-- AddForeignKey
ALTER TABLE `Watched_movie` ADD CONSTRAINT `Watched_movie_movie_id_fkey` FOREIGN KEY (`movie_id`) REFERENCES `Movie`(`movie_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Watched_movie` ADD CONSTRAINT `Watched_movie_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avaliation` ADD CONSTRAINT `Avaliation_movie_id_fkey` FOREIGN KEY (`movie_id`) REFERENCES `Movie`(`movie_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avaliation` ADD CONSTRAINT `Avaliation_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_avaliation_id_fkey` FOREIGN KEY (`avaliation_id`) REFERENCES `Avaliation`(`avaliation_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `avaliation` RENAME INDEX `avaliation_avaliation_id_key` TO `Avaliation_avaliation_id_key`;

-- RenameIndex
ALTER TABLE `comment` RENAME INDEX `comment_comment_id_key` TO `Comment_comment_id_key`;

-- RenameIndex
ALTER TABLE `movie` RENAME INDEX `movie_movie_id_key` TO `Movie_movie_id_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `user_user_id_key` TO `User_user_id_key`;

-- RenameIndex
ALTER TABLE `watched_movie` RENAME INDEX `watched_movie_watched_id_key` TO `Watched_movie_watched_id_key`;
