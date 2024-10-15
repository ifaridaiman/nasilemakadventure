/*
  Warnings:

  - You are about to drop the `nasiLemakCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nasiLemakList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "nasiLemakCategory" DROP CONSTRAINT "nasiLemakCategory_nasiLemakId_fkey";

-- DropTable
DROP TABLE "nasiLemakCategory";

-- DropTable
DROP TABLE "nasiLemakList";

-- CreateTable
CREATE TABLE "Stall" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "negeri" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "halalInfoId" INTEGER NOT NULL,
    "paymentInfoId" INTEGER NOT NULL,
    "stallTypeId" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "Stall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StallCategory" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "StallCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HalalInfo" (
    "id" SERIAL NOT NULL,
    "halalStatus" TEXT NOT NULL,

    CONSTRAINT "HalalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentInfo" (
    "id" SERIAL NOT NULL,
    "paymentMethod" TEXT NOT NULL,

    CONSTRAINT "PaymentInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StallType" (
    "id" SERIAL NOT NULL,
    "stallType" TEXT NOT NULL,

    CONSTRAINT "StallType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MustTryCombination" (
    "id" SERIAL NOT NULL,
    "suggestedCombo" TEXT NOT NULL,
    "stallId" INTEGER NOT NULL,

    CONSTRAINT "MustTryCombination_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Stall" ADD CONSTRAINT "Stall_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "StallCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stall" ADD CONSTRAINT "Stall_halalInfoId_fkey" FOREIGN KEY ("halalInfoId") REFERENCES "HalalInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stall" ADD CONSTRAINT "Stall_paymentInfoId_fkey" FOREIGN KEY ("paymentInfoId") REFERENCES "PaymentInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stall" ADD CONSTRAINT "Stall_stallTypeId_fkey" FOREIGN KEY ("stallTypeId") REFERENCES "StallType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MustTryCombination" ADD CONSTRAINT "MustTryCombination_stallId_fkey" FOREIGN KEY ("stallId") REFERENCES "Stall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
