-- CreateTable
CREATE TABLE "nasiLemakList" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "nasiLemakList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nasiLemakCategory" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "nasiLemakId" TEXT NOT NULL,

    CONSTRAINT "nasiLemakCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "nasiLemakCategory_nasiLemakId_key" ON "nasiLemakCategory"("nasiLemakId");

-- AddForeignKey
ALTER TABLE "nasiLemakCategory" ADD CONSTRAINT "nasiLemakCategory_nasiLemakId_fkey" FOREIGN KEY ("nasiLemakId") REFERENCES "nasiLemakList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
