-- --------------------------------------------------------
-- Hôte :                        127.0.0.1
-- Version du serveur:           10.2.27-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Listage de la structure de la base pour evaluation_sql
CREATE DATABASE IF NOT EXISTS `evaluation_sql` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `evaluation_sql`;

-- Listage de la structure de la table evaluation_sql. client
CREATE TABLE IF NOT EXISTS `client` (
  `cli_num` int(11) NOT NULL,
  `cli_nom` varchar(50) DEFAULT NULL,
  `cli_adresse` varchar(50) DEFAULT NULL,
  `cli_tel` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`cli_num`),
  KEY `Evaluation_Exercice1` (`cli_nom`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table evaluation_sql. commande
CREATE TABLE IF NOT EXISTS `commande` (
  `com_num` int(11) NOT NULL,
  `cli_num` int(11) DEFAULT NULL,
  `com_date` datetime DEFAULT NULL,
  `com_obs` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`com_num`),
  KEY `FK3` (`cli_num`),
  CONSTRAINT `FK3` FOREIGN KEY (`cli_num`) REFERENCES `client` (`cli_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table evaluation_sql. est_compose
CREATE TABLE IF NOT EXISTS `est_compose` (
  `com_num` int(11) NOT NULL,
  `pro_num` int(11) NOT NULL,
  `est_qte` int(11) DEFAULT NULL,
  PRIMARY KEY (`com_num`,`pro_num`),
  KEY `FK2` (`pro_num`),
  CONSTRAINT `FK1` FOREIGN KEY (`com_num`) REFERENCES `commande` (`com_num`),
  CONSTRAINT `FK2` FOREIGN KEY (`pro_num`) REFERENCES `produit` (`pro_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table evaluation_sql. produit
CREATE TABLE IF NOT EXISTS `produit` (
  `pro_num` int(11) NOT NULL,
  `pro_libelle` varchar(50) DEFAULT NULL,
  `pro_description` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`pro_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
