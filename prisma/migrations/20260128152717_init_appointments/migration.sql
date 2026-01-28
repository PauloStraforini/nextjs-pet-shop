/*
  Warnings:

  - You are about to drop the `appoiments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "appoiments";

-- CreateTable
CREATE TABLE "appointments" (
    "id" TEXT NOT NULL,
    "tutorName" TEXT NOT NULL,
    "petName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scheduleAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);
