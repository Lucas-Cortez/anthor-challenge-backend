/*
  Warnings:

  - Added the required column `score` to the `Avaliation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `avaliation` ADD COLUMN `score` INTEGER NOT NULL;
