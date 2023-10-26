-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: my_project
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `catid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `parent_catid` int DEFAULT NULL,
  `level` int DEFAULT NULL,
  `priority` int DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `imgUrl` varchar(45) DEFAULT NULL,
  `leaf` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`catid`)
) ENGINE=InnoDB AUTO_INCREMENT=117007 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (100000,'酒店出行',NULL,1,10,'ONLINE','','false'),(100001,'酒店服务',100000,2,10,'ONLINE','','false'),(100002,'航空服务',100000,2,10,'ONLINE','','false'),(100003,'精选民宿',100000,2,10,'ONLINE','','false'),(100004,'接送机',100000,2,10,'ONLINE','','false'),(100005,'贵宾服务',100000,2,10,'ONLINE','','false'),(100006,'旅游套餐',100000,2,10,'ONLINE','','false'),(100007,'出行票务',100000,2,10,'ONLINE','','false'),(100008,'公交地铁',100000,2,10,'ONLINE','','false'),(101000,'支付宝特色',NULL,1,10,'ONLINE','','false'),(101001,'消费金融',101000,2,10,'ONLINE','','false'),(101002,'理财',101000,2,10,'ONLINE','','false'),(101003,'贷款',101000,2,10,'ONLINE','','false'),(101004,'红包',101000,2,10,'ONLINE','','false'),(101005,'游戏等其他',101000,2,10,'ONLINE','','false'),(101006,'蚂蚁森林道具',101000,2,10,'ONLINE','','false'),(102000,'影音娱乐',NULL,1,10,'ONLINE','','false'),(102001,'影音娱乐',102000,2,10,'ONLINE','','false'),(102002,'票务演出',102000,2,10,'ONLINE','','false'),(102003,'游戏道具',102000,2,10,'ONLINE','','false'),(102004,'视频会员',102000,2,10,'ONLINE','','false'),(102005,'音乐会员',102000,2,10,'ONLINE','','false'),(103000,'甄选美食',NULL,1,10,'ONLINE','','false'),(103001,'外卖服务',103000,2,10,'ONLINE','','false'),(103002,'精选餐饮',103000,2,10,'ONLINE','','false'),(103003,'休闲零食(废弃)',103000,2,10,'ONLINE','','false'),(103004,'方便速食',103000,2,10,'ONLINE','','false'),(103005,'每日坚果',103000,2,10,'ONLINE','','false'),(103006,'饼干曲奇',103000,2,10,'ONLINE','','false'),(103007,'面包蛋糕',103000,2,10,'ONLINE','','false'),(103008,'蜜饯果干',103000,2,10,'ONLINE','','false'),(103009,'进口零食',103000,2,10,'ONLINE','','false'),(103010,'薯片膨化',103000,2,10,'ONLINE','','false'),(103011,'肉干辣条',103000,2,10,'ONLINE','','false'),(103012,'鱼干海苔',103000,2,10,'ONLINE','','false'),(103013,'营养早餐',103000,2,10,'ONLINE','','false'),(103014,'儿童零食',103000,2,10,'ONLINE','','false'),(103015,'糖果巧克力',103000,2,10,'ONLINE','','false'),(104000,'精品好货(废弃)',NULL,1,10,'ONLINE','','false'),(104001,'心选好货(废弃)',104000,2,10,'ONLINE','','false'),(104002,'天猫优选(废弃)',104000,2,10,'ONLINE','','false'),(104003,'品牌好货(废弃)',104000,2,10,'ONLINE','','false'),(104004,'阿里周边(废弃)',104000,2,10,'ONLINE','','false'),(105000,'生活服务',NULL,1,10,'ONLINE','','false'),(105001,'健身运动',105000,2,10,'ONLINE','','false'),(105002,'医疗口腔',105000,2,10,'ONLINE','','false'),(105003,'美容服务',105000,2,10,'ONLINE','','false'),(105004,'租赁服务',105000,2,10,'ONLINE','','false'),(105005,'到家服务',105000,2,10,'ONLINE','','false'),(105006,'快递服务',105000,2,10,'ONLINE','','false'),(106000,'文化教育',NULL,1,10,'ONLINE','','false'),(106001,'学习充电',106000,2,10,'ONLINE','','false'),(106002,'亲子教育',106000,2,10,'ONLINE','','false'),(107000,'粮油调味',NULL,1,10,'ONLINE','','false'),(107001,'优质大米',107000,2,10,'ONLINE','','false'),(107002,'精选粮油',107000,2,10,'ONLINE','','false'),(107003,'厨房调味',107000,2,10,'ONLINE','','false'),(107004,'面粉面条',107000,2,10,'ONLINE','','false'),(107005,'五谷杂粮',107000,2,10,'ONLINE','','false'),(107006,'调味酱料',107000,2,10,'ONLINE','','false'),(108000,'乳饮酒水',NULL,1,10,'ONLINE','','false'),(108001,'牛奶奶粉',108000,2,10,'ONLINE','','false'),(108002,'咖啡麦片',108000,2,10,'ONLINE','','false'),(108003,'红酒啤酒',108000,2,10,'ONLINE','','false'),(108004,'美味果酒',108000,2,10,'ONLINE','','false'),(108005,'白酒黄酒',108000,2,10,'ONLINE','','false'),(108006,'进口乳饮',108000,2,10,'ONLINE','','false'),(108007,'饮水饮料',108000,2,10,'ONLINE','','false'),(109000,'日用百货',NULL,1,10,'ONLINE','','false'),(109001,'收纳晾晒',109000,2,10,'ONLINE','','false'),(109002,'毛巾床品',109000,2,10,'ONLINE','','false'),(109003,'内衣服饰',109000,2,10,'ONLINE','','false'),(109004,'水壶水杯',109000,2,10,'ONLINE','','false'),(109005,'厨房工具',109000,2,10,'ONLINE','','false'),(109006,'碗筷盘盒',109000,2,10,'ONLINE','','false'),(109007,'烹饪锅具',109000,2,10,'ONLINE','','false'),(109008,'一次性用品',109000,2,10,'ONLINE','','false'),(109009,'生活日用',109000,2,10,'ONLINE','','false'),(109010,'精品鞋袜',109000,2,10,'ONLINE','','false'),(109011,'箱包皮具',109000,2,10,'ONLINE','','false'),(109012,'钟表珠宝',109000,2,10,'ONLINE','','false'),(110000,'医疗保健',NULL,1,10,'ONLINE','','false'),(110001,'保健食品',110000,2,10,'ONLINE','','false'),(110002,'传统滋补',110000,2,10,'ONLINE','','false'),(110003,'家庭护理',110000,2,10,'ONLINE','','false'),(110004,'宝妈必备',110000,2,10,'ONLINE','','false'),(110005,'瘦身健体',110000,2,10,'ONLINE','','false'),(110006,'医疗防护',110000,2,10,'ONLINE','','false'),(111000,'母婴用品',NULL,1,10,'ONLINE','','false'),(111001,'洗护用品',111000,2,10,'ONLINE','','false'),(111002,'奶瓶餐具',111000,2,10,'ONLINE','','false'),(111003,'出行寝具',111000,2,10,'ONLINE','','false'),(111004,'宝宝尿裤',111000,2,10,'ONLINE','','false'),(111005,'辅食零食',111000,2,10,'ONLINE','','false'),(111006,'潮流玩具',111000,2,10,'ONLINE','','false'),(111007,'孕妈护理',111000,2,10,'ONLINE','','false'),(111008,'童书书籍',111000,2,10,'ONLINE','','false'),(111009,'童鞋童装',111000,2,10,'ONLINE','','false'),(111010,'宝宝奶粉',111000,2,10,'ONLINE','','false'),(112000,'个人护理',NULL,1,10,'ONLINE','','false'),(112001,'洗发护发',112000,2,10,'ONLINE','','false'),(112002,'淋浴用品',112000,2,10,'ONLINE','','false'),(112003,'牙膏牙刷',112000,2,10,'ONLINE','','false'),(112004,'脸部护理',112000,2,10,'ONLINE','','false'),(112005,'烫发染发',112000,2,10,'ONLINE','','false'),(112006,'洗手护手',112000,2,10,'ONLINE','','false'),(112007,'身体护理',112000,2,10,'ONLINE','','false'),(112008,'足部护理',112000,2,10,'ONLINE','','false'),(113000,'纸品家清',NULL,1,10,'ONLINE','','false'),(113001,'抽纸卷纸',113000,2,10,'ONLINE','','false'),(113002,'湿巾清洁',113000,2,10,'ONLINE','','false'),(113003,'精致洗衣',113000,2,10,'ONLINE','','false'),(113004,'衣物护理',113000,2,10,'ONLINE','','false'),(113005,'厨卫清洁',113000,2,10,'ONLINE','','false'),(113006,'除菌消毒',113000,2,10,'ONLINE','','false'),(113007,'清洁工具',113000,2,10,'ONLINE','','false'),(113008,'环境净化',113000,2,10,'ONLINE','','false'),(114000,'电器数码',NULL,1,10,'ONLINE','','false'),(114001,'潮玩数码',114000,2,10,'ONLINE','','false'),(114002,'厨房电器',114000,2,10,'ONLINE','','false'),(114003,'母婴电器',114000,2,10,'ONLINE','','false'),(114004,'居家清洁',114000,2,10,'ONLINE','','false'),(114005,'按摩器材',114000,2,10,'ONLINE','','false'),(114006,'电脑周边',114000,2,10,'ONLINE','','false'),(114007,'手机周边',114000,2,10,'ONLINE','','false'),(115000,'美容护肤',NULL,1,10,'ONLINE','','false'),(115001,'秋冬护理',115000,2,10,'ONLINE','','false'),(115002,'亮颜美白',115000,2,10,'ONLINE','','false'),(115003,'面膜卸妆',115000,2,10,'ONLINE','','false'),(115004,'防晒必备',115000,2,10,'ONLINE','','false'),(115005,'修容定妆',115000,2,10,'ONLINE','','false'),(115006,'唇眉眼妆',115000,2,10,'ONLINE','','false'),(116000,'宠物生活',NULL,1,10,'ONLINE','','false'),(116001,'猫粮狗粮',116000,2,10,'ONLINE','','false'),(116002,'猫狗衣物',116000,2,10,'ONLINE','','false'),(116003,'猫狗玩具',116000,2,10,'ONLINE','','false'),(116004,'猫狗清洁',116000,2,10,'ONLINE','','false'),(117000,'品质生鲜',NULL,1,10,'ONLINE','','false'),(117001,'猪牛羊肉',117000,2,10,'ONLINE','','false'),(117002,'禽肉蛋品',117000,2,10,'ONLINE','','false'),(117003,'海鲜水产',117000,2,10,'ONLINE','','false'),(117004,'速冻食品',117000,2,10,'ONLINE','','false'),(117005,'绿植鲜花',117000,2,10,'ONLINE','','false'),(117006,'水果蔬菜',117000,2,10,'ONLINE','','false');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_conversion_process`
--

DROP TABLE IF EXISTS `product_conversion_process`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_conversion_process` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(45) DEFAULT NULL,
  `good_id` varchar(45) DEFAULT NULL,
  `option_time` varchar(45) DEFAULT NULL,
  `optioner` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='记录商品过程转化';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_conversion_process`
--

LOCK TABLES `product_conversion_process` WRITE;
/*!40000 ALTER TABLE `product_conversion_process` DISABLE KEYS */;
INSERT INTO `product_conversion_process` VALUES (1,'0','1','2023-10-21 21:27:06','1'),(2,'0','1','2023-10-21 21:41:57','1'),(3,'新增','1','2023-10-21 23:23:20','1'),(4,'新增','1','2023-10-21 23:23:23','1'),(5,'新增','1','2023-10-21 23:23:24','1'),(6,'新增','1','2023-10-21 23:34:15','1'),(7,'新增','1','2023-10-22 14:23:33','1'),(8,'新增','1','2023-10-22 14:24:10','1'),(9,'新增','107','2023-10-22 19:04:43','1'),(10,'申请审核','1','2023-10-22 19:11:44','1'),(11,'申请审核','107','2023-10-22 19:12:19','1'),(12,'审核通过','107','2023-10-22 19:12:52','1'),(13,'审核通过','1','2023-10-23 09:29:14','1');
/*!40000 ALTER TABLE `product_conversion_process` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_user_corresponding`
--

DROP TABLE IF EXISTS `product_user_corresponding`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_user_corresponding` (
  `id` int NOT NULL AUTO_INCREMENT,
  `manager_id` int DEFAULT NULL,
  `creater_id` int NOT NULL,
  `proxyer_id` int DEFAULT NULL,
  `user_goodcol` varchar(45) DEFAULT NULL,
  `good_id` int NOT NULL,
  `provider_id` int DEFAULT NULL,
  `city_id` int DEFAULT NULL,
  `cash_price` decimal(10,2) DEFAULT NULL,
  `jifen_price` int DEFAULT NULL,
  `count` int DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `show_time` datetime DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `max` int DEFAULT NULL,
  `good_protect` varchar(45) DEFAULT NULL,
  `good_describe` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_user_corresponding`
--

LOCK TABLES `product_user_corresponding` WRITE;
/*!40000 ALTER TABLE `product_user_corresponding` DISABLE KEYS */;
INSERT INTO `product_user_corresponding` VALUES (1,1,1,1,NULL,1,1,1,5.22,100,50,'2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','审核完下线',100,'七天包退','超级无敌好用沐浴露'),(2,NULL,2,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,3,3,3,'手机壳',3,3,3,4.89,300,150,'2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','审核状态',300,'七天包退','超级无敌好用手机壳'),(4,4,4,4,'耳机',4,4,4,6.12,400,200,'2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','审核状态',400,'五天包换','超级无敌好用耳机'),(5,5,5,5,'数据线',5,5,5,7.34,500,250,'2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','审核状态',500,'七天包退','超级无敌好用数据线'),(6,6,6,6,'鼠标',6,6,6,8.57,600,300,'2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','审核状态',600,'五天包换','超级无敌好用鼠标'),(7,7,7,7,'键盘',7,7,7,9.89,700,350,'2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','审核状态',700,'七天包退','超级无敌好用键盘'),(8,8,8,8,'显示器',8,8,8,11.23,800,400,'2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','审核状态',800,'五天包换','超级无敌好用显示器'),(9,9,9,9,'音响',9,9,9,13.45,900,450,'2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','审核状态',900,'七天包退','超级无敌好用音响'),(10,10,10,10,'摄像头',10,10,10,15.67,1000,500,'2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','2023-10-21 21:27:06','审核状态',1000,'五天包换','超级无敌好用摄像头');
/*!40000 ALTER TABLE `product_user_corresponding` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `idt_user` int NOT NULL AUTO_INCREMENT,
  `role` tinyint NOT NULL COMMENT '0 小二  1 管理员',
  `phone` varchar(9) DEFAULT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `auto_label` tinyint DEFAULT NULL,
  PRIMARY KEY (`idt_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,0,NULL,'daler','123456',NULL),(2,1,NULL,'xueyue','123456',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_good`
--

DROP TABLE IF EXISTS `user_good`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_good` (
  `id` int NOT NULL AUTO_INCREMENT,
  `manager_id` varchar(45) DEFAULT NULL,
  `creater_id` int NOT NULL,
  `proxyer_id` varchar(45) DEFAULT NULL,
  `user_goodcol` varchar(45) DEFAULT NULL,
  `good_id` int NOT NULL,
  `provider_id` varchar(45) DEFAULT NULL,
  `city_id` varchar(45) DEFAULT NULL,
  `cash_price` varchar(45) DEFAULT NULL,
  `jifen_price` varchar(45) DEFAULT NULL,
  `count` varchar(45) DEFAULT NULL,
  `create_time` varchar(45) DEFAULT NULL,
  `update_time` varchar(45) DEFAULT NULL,
  `show_time` varchar(45) DEFAULT NULL,
  `start_time` varchar(45) DEFAULT NULL,
  `end_time` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `max` varchar(45) DEFAULT NULL,
  `good_protect` varchar(45) DEFAULT NULL,
  `good_describe` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_good`
--

LOCK TABLES `user_good` WRITE;
/*!40000 ALTER TABLE `user_good` DISABLE KEYS */;
INSERT INTO `user_good` VALUES (1,NULL,1,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'沐浴露'),(2,NULL,2,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(100,NULL,1,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user_good` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-25 16:40:34
