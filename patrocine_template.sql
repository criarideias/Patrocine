-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 24, 2023 at 04:50 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `patrocine`
--

-- --------------------------------------------------------

--
-- Table structure for table `filmes`
--

DROP TABLE IF EXISTS `filmes`;
CREATE TABLE IF NOT EXISTS `filmes` (
  `id` varchar(16) NOT NULL,
  `nome` varchar(64) NOT NULL,
  `classificacao` tinyint NOT NULL DEFAULT '0',
  `banner` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `titulo` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `retrato` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `trailer` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sinopse` text NOT NULL,
  `elenco` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `link` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `dataDeInicio` timestamp NOT NULL,
  `dataDeTermino` timestamp NOT NULL,
  `dataDeCriacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `slider` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `filmes`
--

INSERT INTO `filmes` (`id`, `nome`, `classificacao`, `banner`, `titulo`, `retrato`, `trailer`, `sinopse`, `elenco`, `link`, `dataDeInicio`, `dataDeTermino`, `dataDeCriacao`, `slider`) VALUES
('1682178962', 'Velozes e Furiosos X', 0, NULL, '6b98ba58d98a22eb0e1220adff3ce0f7.png', '6b98ba58d98a22eb0e1220adff3ce0f7.webp', '6b98ba58d98a22eb0e1220adff3ce0f7.mp4', 'Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado para destruir o mundo de Dom e destruir tudo - e todos - que ele ama. Toretto então, comandando novamente a equipe de corredores mais conhecida do mundo, encara mais uma difícil missão sobre quatro rodas.', NULL, 'https://ingressoplus.net.br/', '2023-04-19 03:00:00', '2023-04-24 03:00:00', '2023-04-22 15:56:02', 1),
('1682179192', 'John Wick 4', 0, NULL, 'c8cde691afd93d9ac97ed202da79b4a0.png', 'c8cde691afd93d9ac97ed202da79b4a0.webp', 'c8cde691afd93d9ac97ed202da79b4a0.mp4', 'O implacável chefe do submundo Marquis de Gramont (Bill Skarsgård), que tem alianças inteiras atrás dele, representa a maior e sanguinária ameaça até hoje. Mas seus capangas também são durões, incluindo Shimazu (Hiroyuki Sanada) e Killa (Scott Adkins) localizados. Felizmente, existem velhos aliados como Caine (Donnie Yen) que correm para ajudar Wick. Não há caminho de volta, só um sobrevive.', NULL, 'https://ingressoplus.net.br/', '2023-04-18 03:00:00', '2023-04-27 03:00:00', '2023-04-22 15:59:52', 1),
('1682179385719', 'Velozes e Furiosos X', 14, '421e282f9d0a7195657befbcffccf4e7.webp', NULL, NULL, NULL, 'Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado para destruir o mundo de Dom e destruir tudo - e todos - que ele ama. Toretto então, comandando novamente a equipe de corredores mais conhecida do mundo, encara mais uma difícil missão sobre quatro rodas.', 'Vin Diesel, The Rock, Rafael Reis (Modo Femboy)', 'https://ingressoplus.net.br/', '2023-04-18 03:00:00', '2023-04-26 03:00:00', '2023-04-22 16:03:05', 0),
('1682179440327', 'John Wick 4', 16, '0cd42b7c85726fa07ef22029655006b7.webp', NULL, NULL, NULL, 'O implacável chefe do submundo Marquis de Gramont (Bill Skarsgård), que tem alianças inteiras atrás dele, representa a maior e sanguinária ameaça até hoje. Mas seus capangas também são durões, incluindo Shimazu (Hiroyuki Sanada) e Killa (Scott Adkins) localizados. Felizmente, existem velhos aliados como Caine (Donnie Yen) que correm para ajudar Wick. Não há caminho de volta, só um sobrevive.', 'Keanu Reeves, O Careca lá de Matrix, Tom Cruise', 'https://ingressoplus.net.br/', '2023-04-26 03:00:00', '2023-04-29 03:00:00', '2023-04-22 16:04:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `outdoors`
--

DROP TABLE IF EXISTS `outdoors`;
CREATE TABLE IF NOT EXISTS `outdoors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(128) NOT NULL,
  `arquivo` varchar(128) DEFAULT NULL,
  `dataDeModificacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `outdoors`
--

INSERT INTO `outdoors` (`id`, `titulo`, `arquivo`, `dataDeModificacao`) VALUES
(1, 'anuncio', '450136f1970aaa0779529d5cd2e3becc.jpeg', '2023-04-19 16:33:37'),
(2, 'novidade', '64315a3a1609d4197bc35ff7b35cf922.jpeg', '2023-04-19 16:33:37');

-- --------------------------------------------------------

--
-- Table structure for table `programacao`
--

DROP TABLE IF EXISTS `programacao`;
CREATE TABLE IF NOT EXISTS `programacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sala` tinyint NOT NULL,
  `filme` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `horario` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `programacao`
--

INSERT INTO `programacao` (`id`, `sala`, `filme`, `horario`) VALUES
(1, 2, '1682081040409', '2023-04-18 19:30:00'),
(2, 2, '1682081040409', '2023-04-18 19:45:00'),
(3, 2, '1682081040409', '2023-04-18 20:00:00'),
(4, 2, '1682081040409', '2023-04-19 01:00:00'),
(5, 2, '1682081040409', '2023-04-19 19:30:00'),
(6, 2, '1682081040409', '2023-04-19 19:45:00'),
(7, 2, '1682081040409', '2023-04-19 20:00:00'),
(8, 2, '1682081040409', '2023-04-20 01:00:00'),
(9, 2, '1682081040409', '2023-04-20 19:30:00'),
(10, 2, '1682081040409', '2023-04-20 19:45:00'),
(11, 2, '1682081040409', '2023-04-20 20:00:00'),
(12, 2, '1682081040409', '2023-04-21 01:00:00'),
(49, 1, '1682179385719', '2023-04-17 19:15:00'),
(50, 1, '1682179385719', '2023-04-17 19:30:00'),
(51, 1, '1682179385719', '2023-04-17 19:45:00'),
(52, 1, '1682179385719', '2023-04-17 21:45:00'),
(53, 1, '1682179385719', '2023-04-18 00:00:00'),
(54, 1, '1682179385719', '2023-04-18 19:15:00'),
(55, 1, '1682179385719', '2023-04-18 19:30:00'),
(56, 1, '1682179385719', '2023-04-18 19:45:00'),
(57, 1, '1682179385719', '2023-04-18 21:45:00'),
(58, 1, '1682179385719', '2023-04-19 00:00:00'),
(59, 1, '1682179385719', '2023-04-19 19:15:00'),
(60, 1, '1682179385719', '2023-04-19 19:30:00'),
(61, 1, '1682179385719', '2023-04-19 19:45:00'),
(62, 1, '1682179385719', '2023-04-19 21:45:00'),
(63, 1, '1682179385719', '2023-04-20 00:00:00'),
(64, 1, '1682179385719', '2023-04-20 19:15:00'),
(65, 1, '1682179385719', '2023-04-20 19:30:00'),
(66, 1, '1682179385719', '2023-04-20 19:45:00'),
(67, 1, '1682179385719', '2023-04-20 21:45:00'),
(68, 1, '1682179385719', '2023-04-21 00:00:00'),
(69, 1, '1682179385719', '2023-04-21 19:15:00'),
(70, 1, '1682179385719', '2023-04-21 19:30:00'),
(71, 1, '1682179385719', '2023-04-21 19:45:00'),
(72, 1, '1682179385719', '2023-04-21 21:45:00'),
(73, 1, '1682179385719', '2023-04-22 00:00:00'),
(74, 1, '1682179385719', '2023-04-22 19:15:00'),
(75, 1, '1682179385719', '2023-04-22 19:30:00'),
(76, 1, '1682179385719', '2023-04-22 19:45:00'),
(77, 1, '1682179385719', '2023-04-22 21:45:00'),
(78, 1, '1682179385719', '2023-04-23 00:00:00'),
(79, 1, '1682179385719', '2023-04-23 19:15:00'),
(80, 1, '1682179385719', '2023-04-23 19:30:00'),
(81, 1, '1682179385719', '2023-04-23 19:45:00'),
(82, 1, '1682179385719', '2023-04-23 21:45:00'),
(83, 1, '1682179385719', '2023-04-24 00:00:00'),
(84, 1, '1682179385719', '2023-04-24 19:15:00'),
(85, 1, '1682179385719', '2023-04-24 19:30:00'),
(86, 1, '1682179385719', '2023-04-24 19:45:00'),
(87, 1, '1682179385719', '2023-04-24 21:45:00'),
(88, 1, '1682179385719', '2023-04-25 00:00:00'),
(89, 1, '1682179385719', '2023-04-25 19:15:00'),
(90, 1, '1682179385719', '2023-04-25 19:30:00'),
(91, 1, '1682179385719', '2023-04-25 19:45:00'),
(92, 1, '1682179385719', '2023-04-25 21:45:00'),
(93, 1, '1682179385719', '2023-04-26 00:00:00'),
(94, 2, '1682179440327', '2023-04-25 22:30:00'),
(95, 2, '1682179440327', '2023-04-26 00:45:00'),
(96, 2, '1682179440327', '2023-04-26 03:15:00'),
(97, 2, '1682179440327', '2023-04-26 05:30:00'),
(98, 2, '1682179440327', '2023-04-26 22:30:00'),
(99, 2, '1682179440327', '2023-04-27 00:45:00'),
(100, 2, '1682179440327', '2023-04-27 03:15:00'),
(101, 2, '1682179440327', '2023-04-27 05:30:00'),
(102, 2, '1682179440327', '2023-04-27 22:30:00'),
(103, 2, '1682179440327', '2023-04-28 00:45:00'),
(104, 2, '1682179440327', '2023-04-28 03:15:00'),
(105, 2, '1682179440327', '2023-04-28 05:30:00'),
(106, 2, '1682179440327', '2023-04-28 22:30:00'),
(107, 2, '1682179440327', '2023-04-29 00:45:00'),
(108, 2, '1682179440327', '2023-04-29 03:15:00'),
(109, 2, '1682179440327', '2023-04-29 05:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(6) NOT NULL,
  `user` varchar(6) NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ip` varchar(32) NOT NULL,
  `dataDeExpiracao` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` varchar(6) NOT NULL,
  `nome` varchar(16) NOT NULL,
  `username` varchar(16) NOT NULL,
  `senha` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `username`, `senha`) VALUES
('956503', 'Jean', 'jean@patrocine', '$2y$10$vP/F7uP2f60snvE6xJiYquyrCtAz8H1JcqQmKoZCgIWsx7ZHrBoPy');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
