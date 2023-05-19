/*
  Warnings:

  - You are about to drop the column `taskId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `assignedAt` on the `UserProjects` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `UserProjects` table. All the data in the column will be lost.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assignedAt` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assigneeId` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assignorId` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimate` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `UserProjects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Project` DROP COLUMN `taskId`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `endDate` DATETIME(3) NOT NULL,
    ADD COLUMN `ownerId` INTEGER NOT NULL,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Task` ADD COLUMN `assignedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `assigneeId` INTEGER NOT NULL,
    ADD COLUMN `assignorId` INTEGER NOT NULL,
    ADD COLUMN `createdBy` INTEGER NOT NULL,
    ADD COLUMN `estimate` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `UserProjects` DROP COLUMN `assignedAt`,
    DROP COLUMN `assignedBy`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_assigneeId_fkey` FOREIGN KEY (`assigneeId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_assignorId_fkey` FOREIGN KEY (`assignorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
