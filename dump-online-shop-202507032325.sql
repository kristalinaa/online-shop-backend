-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: online-shop
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attachment`
--

DROP TABLE IF EXISTS `attachment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attachment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int DEFAULT NULL,
  `path` varchar(200) NOT NULL,
  `fileName` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_299ed68b8e366fda55db5e46bb3` (`productId`),
  CONSTRAINT `FK_299ed68b8e366fda55db5e46bb3` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attachment`
--

LOCK TABLES `attachment` WRITE;
/*!40000 ALTER TABLE `attachment` DISABLE KEYS */;
INSERT INTO `attachment` VALUES (11,11,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\kas.jpg','kas.jpg'),(12,12,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\kas.jpg','kas.jpg'),(13,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\kas.jpg','kas.jpg'),(14,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\transparent.png','transparent.png'),(15,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\foto2.jpg','foto2.jpg'),(16,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\foto1.jpg','foto1.jpg'),(17,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\kas.jpg','kas.jpg'),(18,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\transparent.png','transparent.png'),(19,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\foto2.jpg','foto2.jpg'),(20,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\foto1.jpg','foto1.jpg'),(21,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\kas.jpg','kas.jpg'),(22,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\transparent.png','transparent.png'),(23,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\foto2.jpg','foto2.jpg'),(24,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\foto1.jpg','foto1.jpg'),(25,13,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\kas.jpg','kas.jpg'),(26,13,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\transparent.png','transparent.png'),(27,13,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\foto2.jpg','foto2.jpg'),(28,13,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\foto1.jpg','foto1.jpg'),(29,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\s23ultra1.jpg','s23ultra1.jpg'),(30,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\S23Ultra_Green_MO.avif','S23Ultra_Green_MO.avif'),(31,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\s23ultra.jpg','s23ultra.jpg'),(32,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\s23ultra1.jpg','s23ultra1.jpg'),(33,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\S23Ultra_Green_MO.avif','S23Ultra_Green_MO.avif'),(34,NULL,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\s23ultra.jpg','s23ultra.jpg'),(35,14,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\s23ultra1.jpg','s23ultra1.jpg'),(36,14,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\S23Ultra_Green_MO.avif','S23Ultra_Green_MO.avif'),(37,14,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\s23ultra.jpg','s23ultra.jpg'),(38,15,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\jeans.webp','jeans.webp'),(39,16,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\sc2.jpg','sc2.jpg'),(40,16,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\src\\files\\sc1.jpg','sc1.jpg'),(41,17,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\files\\sc2.jpg','sc2.jpg'),(42,17,'C:\\Users\\User\\Desktop\\OnlinesShop\\online-shop-backend\\files\\sc1.jpg','sc1.jpg'),(43,18,'C:\\Users\\User\\Desktop\\Kristalina\\online-shop-backend\\files\\hp2.jpg','hp2.jpg'),(44,18,'C:\\Users\\User\\Desktop\\Kristalina\\online-shop-backend\\files\\hp1.jpg','hp1.jpg'),(45,19,'C:\\Users\\User\\Desktop\\Kristalina\\online-shop-backend\\files\\ninebot2.jpg','ninebot2.jpg'),(46,19,'C:\\Users\\User\\Desktop\\Kristalina\\online-shop-backend\\files\\nineboot1.jpg','nineboot1.jpg'),(47,20,'C:\\Users\\User\\Desktop\\Kristalina\\online-shop-backend\\files\\kufje2.jpg','kufje2.jpg'),(48,20,'C:\\Users\\User\\Desktop\\Kristalina\\online-shop-backend\\files\\kufje1.jpg','kufje1.jpg');
/*!40000 ALTER TABLE `attachment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bag`
--

DROP TABLE IF EXISTS `bag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL DEFAULT '1',
  `addedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `size` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_313d08668a90a6284cc25b6d209` (`userId`),
  KEY `FK_55e606dd3e2495f675c24c261b2` (`productId`),
  CONSTRAINT `FK_313d08668a90a6284cc25b6d209` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_55e606dd3e2495f675c24c261b2` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bag`
--

LOCK TABLES `bag` WRITE;
/*!40000 ALTER TABLE `bag` DISABLE KEYS */;
INSERT INTO `bag` VALUES (18,15,'2025-05-01 16:59:32.284000',11,13,'XS','#CEFDFF'),(19,5,'2025-05-01 17:03:52.418000',11,13,'2XL','#C2948A'),(20,0,'2025-06-08 19:38:05.041000',15,13,'XXS','#7EA8BE'),(21,2,'2025-06-08 20:02:13.016000',15,14,'XXS','#7EA8BE');
/*!40000 ALTER TABLE `bag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bank_account`
--

DROP TABLE IF EXISTS `bank_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bank_account` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `cardNumber` varchar(50) NOT NULL,
  `expiry` varchar(50) NOT NULL,
  `cvv` varchar(50) NOT NULL,
  `total` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c2ba1381682b0291238cbc7a65d` (`userId`),
  CONSTRAINT `FK_c2ba1381682b0291238cbc7a65d` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bank_account`
--

LOCK TABLES `bank_account` WRITE;
/*!40000 ALTER TABLE `bank_account` DISABLE KEYS */;
INSERT INTO `bank_account` VALUES (1,11,'Kristalina Veliu','4444875746374567','1427','436','NaN','visa'),(2,11,'Adem Cani','2345236723572341','2528','356','4569','mastercard'),(3,15,'John Doe','2342534634343567','1226','441','86828','visa'),(4,15,'Kristalina Veliu','1234567890123456','1212','123','1200','mastercard'),(5,17,'Admin','45121325245624','2426','356','7600','mastercard');
/*!40000 ALTER TABLE `bank_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `parentId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_d5456fd7e4c4866fec8ada1fa10` (`parentId`),
  CONSTRAINT `FK_d5456fd7e4c4866fec8ada1fa10` FOREIGN KEY (`parentId`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Electronics',NULL),(2,'Clothes',NULL),(3,'Accessories',NULL),(9,'Cases',3),(10,'Samsung',9),(11,'Self Care',NULL),(12,'Laptop',1),(13,'Skuter',1),(14,'Kufje',1);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_closure`
--

DROP TABLE IF EXISTS `category_closure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_closure` (
  `id_ancestor` int NOT NULL,
  `id_descendant` int NOT NULL,
  PRIMARY KEY (`id_ancestor`,`id_descendant`),
  KEY `IDX_4aa1348fc4b7da9bef0fae8ff4` (`id_ancestor`),
  KEY `IDX_6a22002acac4976977b1efd114` (`id_descendant`),
  CONSTRAINT `FK_4aa1348fc4b7da9bef0fae8ff48` FOREIGN KEY (`id_ancestor`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_6a22002acac4976977b1efd114a` FOREIGN KEY (`id_descendant`) REFERENCES `category` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_closure`
--

LOCK TABLES `category_closure` WRITE;
/*!40000 ALTER TABLE `category_closure` DISABLE KEYS */;
INSERT INTO `category_closure` VALUES (1,1),(1,12),(1,13),(1,14),(2,2),(3,3),(3,9),(3,10),(9,9),(9,10),(10,10),(11,11),(12,12),(13,13),(14,14);
/*!40000 ALTER TABLE `category_closure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat_messages`
--

DROP TABLE IF EXISTS `chat_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat_messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` varchar(1000) NOT NULL,
  `isRead` tinyint NOT NULL DEFAULT '0',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `senderId` int DEFAULT NULL,
  `recipientId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_fc6b58e41e9a871dacbe9077de` (`senderId`),
  KEY `IDX_7be9cbcf5322849a63d6faf9c6` (`recipientId`),
  CONSTRAINT `FK_7be9cbcf5322849a63d6faf9c6a` FOREIGN KEY (`recipientId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_fc6b58e41e9a871dacbe9077def` FOREIGN KEY (`senderId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat_messages`
--

LOCK TABLES `chat_messages` WRITE;
/*!40000 ALTER TABLE `chat_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checkout`
--

DROP TABLE IF EXISTS `checkout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `checkout` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `phoneNumber` varchar(50) NOT NULL,
  `paymentMethod` varchar(50) NOT NULL,
  `deliveryMethod` varchar(50) NOT NULL,
  `total` varchar(50) NOT NULL,
  `userId` int DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `bankAccountId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_3f9f9c92797750f1892489f2a38` (`userId`),
  KEY `FK_08c87b57330e0232e0cec763ad3` (`bankAccountId`),
  CONSTRAINT `FK_08c87b57330e0232e0cec763ad3` FOREIGN KEY (`bankAccountId`) REFERENCES `bank_account` (`id`),
  CONSTRAINT `FK_3f9f9c92797750f1892489f2a38` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkout`
--

LOCK TABLES `checkout` WRITE;
/*!40000 ALTER TABLE `checkout` DISABLE KEYS */;
INSERT INTO `checkout` VALUES (7,'asd','asd@gmail.com','Albania','Tirana','345345','cart','DHL','1798',15,'2025-06-13 21:33:45.964599',1),(8,'Adem Cani','245','Albania','Tirana','2341','cart','DHL','1798',15,'2025-07-03 18:48:35.897911',3),(9,'Adem Cani','245','Albania','Tirana','2341','cart','DHL','1798',15,'2025-07-03 18:52:51.321227',3),(10,'Adem Cani','245','Albania','Tirana','2341','cart','DHL','1798',15,'2025-07-03 18:53:18.533650',3),(11,'Adem Cani','245','Albania','Tirana','2341','cart','DHL','1798',15,'2025-07-03 18:58:49.275778',3),(12,'','','','','','cart','DHL','1798',15,'2025-07-03 19:02:07.142367',1),(13,'','','','','','cart','DHL','1798',15,'2025-07-03 19:02:52.181920',1),(14,'','','','','','cart','DHL','1798',15,'2025-07-03 19:03:33.036268',1),(15,'','','','','','cart','DHL','1798',15,'2025-07-03 19:05:08.603076',1),(16,'','','','','','cart','DHL','1798',15,'2025-07-03 19:06:27.571720',1),(17,'','','','','','cart','DHL','1798',15,'2025-07-03 19:07:38.640654',1),(18,'','','','','','cart','DHL','1798',15,'2025-07-03 19:17:29.613581',1),(19,'','','','','','cart','DHL','1798',15,'2025-07-03 19:19:14.853999',1),(20,'','','','','','cart','DHL','1798',15,'2025-07-03 19:24:54.309758',1),(21,'sdgfdg','adf@gmail.com','Albania','Elbasan','23534623','cart','DHL','1798',15,'2025-07-03 19:25:54.813741',3),(22,'dsf','adf@gmail.com','Albania','Tirana','345345','cart','DHL','1798',15,'2025-07-03 19:29:56.089289',1),(23,'dsf','adf@gmail.com','Albania','Tirana','345345','cart','DHL','1798',15,'2025-07-03 19:30:10.284862',3),(24,'Adem Cani','adf@gmail.com','Albania','Tirana','2345245','cart','DHL','1798',15,'2025-07-03 19:34:30.062948',3),(25,'','','','','','cart','DHL','1798',15,'2025-07-03 19:35:13.441011',1),(26,'Adem Cani','adf@gmail.com','Albania','Tirana','135135','cart','DHL','1798',15,'2025-07-03 19:53:21.729062',3),(27,'','adf@gmail.com','Albania','Tirana','2353462346','cart','DHL','1798',15,'2025-07-03 20:31:51.820600',3),(28,'','adf@gmail.com','Albania','Tirana','2353462346','cart','DHL','1798',15,'2025-07-03 20:32:15.458226',3),(29,'','adf@gmail.com','Albania','Tirana','2353462346','cart','DHL','1798',15,'2025-07-03 20:32:35.318877',3),(30,'','','','','','cart','DHL','1798',15,'2025-07-03 20:33:35.809504',1),(31,'','adf@gmail.com','Albania','Tirana','24534535345','cart','DHL','1798',15,'2025-07-03 20:33:54.912626',3),(32,'Adem Cani','adf@gmail.com','Albania','Elbasan','65454','cart','DHL','1798',15,'2025-07-03 20:36:06.257265',3);
/*!40000 ALTER TABLE `checkout` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` varchar(255) NOT NULL,
  `isRead` tinyint NOT NULL DEFAULT '0',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `senderId` int DEFAULT NULL,
  `recipientId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c0af34102c13c654955a0c5078b` (`senderId`),
  KEY `FK_ab7cbe7a013ecac5da0a8f88884` (`recipientId`),
  CONSTRAINT `FK_ab7cbe7a013ecac5da0a8f88884` FOREIGN KEY (`recipientId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_c0af34102c13c654955a0c5078b` FOREIGN KEY (`senderId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
INSERT INTO `notification` VALUES (1,'You have a new offer!',1,'2025-07-03 18:48:35.988462',15,4),(2,'You have a new offer!',1,'2025-07-03 18:52:51.369433',15,4),(3,'You have a new offer!',1,'2025-07-03 18:53:18.594258',15,4),(4,'You have a new offer!',1,'2025-07-03 18:58:49.319179',15,4),(5,'You have a new offer!',1,'2025-07-03 19:02:07.174777',15,4),(6,'You have a new offer!',1,'2025-07-03 19:02:52.209804',15,4),(7,'You have a new offer!',1,'2025-07-03 19:03:33.059146',15,4),(8,'You have a new offer!',1,'2025-07-03 19:05:08.625291',15,4),(9,'You have a new offer!',1,'2025-07-03 19:06:27.610333',15,4),(10,'You have a new offer!',1,'2025-07-03 19:07:38.663630',15,4),(11,'You have a new offer!',1,'2025-07-03 19:17:29.647521',15,4),(12,'You have a new offer!',1,'2025-07-03 19:19:14.887056',15,4),(13,'You have a new offer!',1,'2025-07-03 19:24:54.342668',15,4),(14,'You have a new offer!',1,'2025-07-03 19:25:54.838091',15,4),(15,'You have a new offer!',1,'2025-07-03 19:29:56.116290',15,4),(16,'You have a new offer!',1,'2025-07-03 19:30:10.308466',15,4),(17,'You have a new offer!',1,'2025-07-03 19:34:30.085746',15,4),(18,'You have a new offer!',1,'2025-07-03 19:35:13.482829',15,4),(19,'You have a new offer!',1,'2025-07-03 19:53:21.767791',15,4),(20,'You have a new offer!',1,'2025-07-03 20:31:51.849993',15,4),(21,'You have a new offer!',1,'2025-07-03 20:32:15.481088',15,4),(22,'You have a new offer!',1,'2025-07-03 20:32:35.337917',15,4),(23,'You have a new offer!',1,'2025-07-03 20:33:35.828555',15,4),(24,'You have a new offer!',1,'2025-07-03 20:33:54.932864',15,4),(25,'You have a new offer!',1,'2025-07-03 20:36:06.275308',15,4);
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productName` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `quantity` decimal(10,0) NOT NULL DEFAULT '0',
  `price` decimal(10,0) NOT NULL DEFAULT '0',
  `currency` varchar(50) NOT NULL DEFAULT 'LEK',
  `userId` int DEFAULT NULL,
  `details` varchar(100) NOT NULL,
  `size` varchar(10) DEFAULT NULL,
  `review` decimal(10,0) NOT NULL DEFAULT '5',
  `categoryId` int DEFAULT NULL,
  `color` json DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  KEY `FK_329b8ae12068b23da547d3b4798` (`userId`),
  KEY `FK_ff0c0301a95e517153df97f6812` (`categoryId`),
  CONSTRAINT `FK_329b8ae12068b23da547d3b4798` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (11,'sdf','sdf',5,3,'LEK',13,'sf','sdf',5,10,'[\"#EAE0D5\", \"#C2948A\", \"#7EA8BE\", \"#CEFDFF\"]','2025-06-14 15:16:36.770305'),(12,'sdf','dsf',45,5,'LEK',13,'sdfsdf','f',5,10,'[\"#EAE0D5\", \"#C2948A\", \"#7EA8BE\", \"#CEFDFF\"]','2025-06-12 15:16:36.770305'),(13,'Kase per samsung A50','A phone case is a type of object that protects th',17,12,'LEK',13,'Sure, Shakespeare is the master when it comes to cutting observations ','2',5,10,'[\"#EAE0D5\", \"#C2948A\", \"#7EA8BE\", \"#CEFDFF\"]','2025-06-15 15:16:36.770305'),(14,'Samsung S23 Ultra','Telefon ne super gjendje',0,750,'LEK',16,'Telefon ne super ','XL',5,1,'[\"#EAE0D5\", \"#7EA8BE\", \"#CEFDFF\"]','2025-06-15 15:16:36.770305'),(15,'jeans','boyfriend style jeans',5,15,'LEK',16,'blue jeans','xl',5,2,'[\"#C2948A\", \"#7EA8BE\"]','2025-06-15 15:16:36.770305'),(16,'Krem','krem',23,45,'LEK',16,'krem','XL',5,11,'[\"#C2948A\", \"#7EA8BE\", \"#CEFDFF\"]','2025-06-15 15:16:36.770305'),(17,'krem per fytyren','krem per fytyren',5,25,'LEK',16,'krem per fytyren','XL',5,11,'[\"#CEFDFF\"]','2025-06-15 15:16:36.770305'),(18,'Laptop HP','Laptop HP',1,2000,'LEK',16,'Laptop HP','1',5,12,'[\"#CEFDFF\"]','2025-07-03 21:27:21.149214'),(19,'Nineboot','Nineboot',1,600,'LEK',16,'Nineboot','1',5,13,'[\"#C2948A\", \"#7EA8BE\", \"#CEFDFF\"]','2025-07-03 21:40:59.578496'),(20,'Kufje razer','Kufje razer',1,5000,'LEK',16,'Kufje razer','12',5,14,'[\"#EAE0D5\", \"#7EA8BE\", \"#CEFDFF\"]','2025-07-03 21:44:06.206775');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'person'),(3,'company');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sold`
--

DROP TABLE IF EXISTS `sold`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sold` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `productId` int DEFAULT NULL,
  `checkoutId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_154ab465de1a3de72c4869053db` (`productId`),
  KEY `FK_9429cfc818035b8207352cec583` (`checkoutId`),
  CONSTRAINT `FK_154ab465de1a3de72c4869053db` FOREIGN KEY (`productId`) REFERENCES `product` (`id`),
  CONSTRAINT `FK_9429cfc818035b8207352cec583` FOREIGN KEY (`checkoutId`) REFERENCES `checkout` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sold`
--

LOCK TABLES `sold` WRITE;
/*!40000 ALTER TABLE `sold` DISABLE KEYS */;
INSERT INTO `sold` VALUES (1,0,13,7),(2,2,14,7),(3,0,13,8),(4,2,14,8),(5,0,13,9),(6,2,14,9),(7,0,13,10),(8,2,14,10),(9,0,13,11),(10,2,14,11),(11,0,13,12),(12,2,14,12),(13,0,13,13),(14,2,14,13),(15,0,13,14),(16,2,14,14),(17,0,13,15),(18,2,14,15),(19,0,13,16),(20,2,14,16),(21,0,13,17),(22,2,14,17),(23,0,13,18),(24,2,14,18),(25,0,13,19),(26,2,14,19),(27,0,13,20),(28,2,14,20),(29,0,13,21),(30,2,14,21),(31,0,13,22),(32,2,14,22),(33,0,13,23),(34,2,14,23),(35,0,13,24),(36,2,14,24),(37,0,13,25),(38,2,14,25),(39,0,13,26),(40,2,14,26),(41,0,13,27),(42,2,14,27),(43,0,13,28),(44,2,14,28),(45,0,13,29),(46,2,14,29),(47,0,13,30),(48,2,14,30),(49,0,13,31),(50,2,14,31),(51,0,13,32),(52,2,14,32);
/*!40000 ALTER TABLE `sold` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `isActive` tinyint NOT NULL DEFAULT '1',
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `status` enum('APPROVED','PENDING','BANNED') NOT NULL DEFAULT 'APPROVED',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (4,'Kristalina','Veliu',1,'kristalinaveliu7@gmail.com','$2b$10$VE3xBj9BOI1RZUAolh2bYuhFmop5zDrn4dlchhppD0CrC/cVjmMEi','2025-06-14 15:43:13.699000','BANNED'),(6,'Kr','veliu',1,'veli2@gmail.com','$2b$10$vob7nEV1i.8cT1uuIx5s1.CA5Ed8sjbaZWTVEVWmJ9oolEZQ/8zHq','2025-06-14 15:43:13.699705','APPROVED'),(7,'kr2','veliu',1,'veliu@gmail.com','$2b$10$N4SvcL02JyM2lj7U/Dppz.5NbPk3lpDNYOl.l/SEL4b6AQWmuu4ba','2025-06-14 15:43:13.699705','APPROVED'),(11,'person1','person1',1,'person1@gmail.com','$2b$10$ccGwaMH5xCUm9zr.q.Rh1.ZYSXon9QCcWIwtrlMIJ5EDlPnnFpbd6','2025-06-14 15:43:13.699705','APPROVED'),(12,'person2','person2',1,'person2@gmail.com','$2b$10$/2gUF6G0rAiYL6rt1PRUguO8Dth2xPTPbAui4EoNfrJ.EgctyN7Bu','2025-06-14 15:43:13.699705','APPROVED'),(13,'company1','company1',1,'company1@gmail.com','$2b$10$wfRqXl1CMMh.4lhtZ/mCHereqOffqWGIDjmqWGVxmy17ADUf.fBSS','2025-06-14 15:43:13.699705','APPROVED'),(14,'Kristalina','Veliu',1,'kristaline_veliu@gmail.com','$2b$10$kLsXMYb0rhf8OflWBDAQxeTv9PIVhshXHO4orpf6Q9Hm9.4qaYRn2','2025-06-14 15:43:13.699705','APPROVED'),(15,'John','Doe',1,'johndoe@gmail.com','$2b$10$7M6l18zn.T9u.y.kM9mRxejKmN66XZ05WENfMfr5FnbL.pdXtQddK','2025-06-14 15:43:13.699705','APPROVED'),(16,'eg','group',1,'eggroup@gmail.com','$2b$10$DSPOKhP1x0Y9dGxN2pI6z.i0faSArBxxvxW/TVQpXPfffY6.AbxK.','2025-06-14 15:43:13.699705','APPROVED'),(17,'admin','admin',1,'admin@gmail.com','$2b$10$ypdk0WASuf7MYxuVb9ZAJON8NaJPVNxhoU9QsW.j/2E2bPzyt7oHe','2025-06-14 15:43:13.699705','APPROVED');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `roleId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ab40a6f0cd7d3ebfcce082131fd` (`userId`),
  KEY `FK_dba55ed826ef26b5b22bd39409b` (`roleId`),
  CONSTRAINT `FK_ab40a6f0cd7d3ebfcce082131fd` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_dba55ed826ef26b5b22bd39409b` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,12,2),(2,13,3),(3,14,2),(4,11,2),(5,15,2),(6,16,3),(7,17,1);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'online-shop'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-03 23:25:59
