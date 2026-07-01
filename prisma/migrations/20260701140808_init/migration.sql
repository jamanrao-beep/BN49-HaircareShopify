-- CreateEnum
CREATE TYPE "RoleName" AS ENUM ('ADMIN', 'APPROVER', 'EDITOR', 'DISTRIBUTOR', 'VIEWER');

-- CreateEnum
CREATE TYPE "B2BApplicationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "DistributorOrderState" AS ENUM ('ACCEPTED', 'OUT_FOR_DELIVERY', 'REJECTED', 'DELIVERED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "shopifyCustomerId" TEXT,
    "role" "RoleName" NOT NULL DEFAULT 'VIEWER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DistributorRegion" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DistributorRegion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "B2BApplication" (
    "id" TEXT NOT NULL,
    "shopifyCustomerId" TEXT,
    "email" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "taxId" TEXT,
    "message" TEXT,
    "status" "B2BApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "reviewedById" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "rejectionReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "B2BApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Influencer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Influencer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InfluencerCode" (
    "id" TEXT NOT NULL,
    "influencerId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "commissionRate" DECIMAL(65,30),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InfluencerCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderAttribution" (
    "id" TEXT NOT NULL,
    "shopifyOrderId" TEXT NOT NULL,
    "influencerCodeId" TEXT NOT NULL,
    "subtotalAmount" DECIMAL(65,30) NOT NULL,
    "currencyCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrderAttribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DistributorOrderStatus" (
    "id" TEXT NOT NULL,
    "shopifyOrderId" TEXT NOT NULL,
    "state" "DistributorOrderState" NOT NULL,
    "region" TEXT NOT NULL,
    "updatedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DistributorOrderStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "actorId" TEXT,
    "action" TEXT NOT NULL,
    "target" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebhookEvent" (
    "id" TEXT NOT NULL,
    "webhookId" TEXT,
    "topic" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "processedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WebhookEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DistributorRegion_userId_country_region_key" ON "DistributorRegion"("userId", "country", "region");

-- CreateIndex
CREATE UNIQUE INDEX "Influencer_email_key" ON "Influencer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "InfluencerCode_code_key" ON "InfluencerCode"("code");

-- CreateIndex
CREATE UNIQUE INDEX "OrderAttribution_shopifyOrderId_influencerCodeId_key" ON "OrderAttribution"("shopifyOrderId", "influencerCodeId");

-- CreateIndex
CREATE UNIQUE INDEX "DistributorOrderStatus_shopifyOrderId_key" ON "DistributorOrderStatus"("shopifyOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "WebhookEvent_webhookId_key" ON "WebhookEvent"("webhookId");

-- AddForeignKey
ALTER TABLE "DistributorRegion" ADD CONSTRAINT "DistributorRegion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InfluencerCode" ADD CONSTRAINT "InfluencerCode_influencerId_fkey" FOREIGN KEY ("influencerId") REFERENCES "Influencer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderAttribution" ADD CONSTRAINT "OrderAttribution_influencerCodeId_fkey" FOREIGN KEY ("influencerCodeId") REFERENCES "InfluencerCode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
