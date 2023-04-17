-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 17, 2023 at 03:55 PM
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
  `id` varchar(6) NOT NULL,
  `nome` varchar(64) NOT NULL,
  `banner` varchar(64) NOT NULL,
  `titulo` varchar(64) NOT NULL,
  `retrato` varchar(64) NOT NULL,
  `trailer` varchar(64) NOT NULL,
  `sinopse` text NOT NULL,
  `elenco` text NOT NULL,
  `dataDeInicio` timestamp NOT NULL,
  `dataDeTermino` timestamp NOT NULL,
  `dataDeCriacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `slider` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `programacao`
--

DROP TABLE IF EXISTS `programacao`;
CREATE TABLE IF NOT EXISTS `programacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sala` tinyint NOT NULL,
  `filme` varchar(6) NOT NULL,
  `horario` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user`, `token`, `ip`, `dataDeExpiracao`) VALUES
('180714', '956503', 'xxWVQvrdLGsTzUVYQh9NRU53vyHXdCnGIKBsKXUDu5J2mmOsFfKo5QysEkpvLVbD', '::1', 1681676453),
('206715', '956503', 'zCyohwmEmoLOAJAqKRzJUwllKeSfv75aetRqYifN7ctUVJubqcYgbPCzDkqVLldr', '::1', 1681672585),
('208223', '956503', 'd8UJVbwzCOr4OX7YcqhoibSIv98MGJ4mVbqE5mBid45jCtXqMSN1udaLatx2Ghdi', '::1', 1681674496),
('276197', '956503', '8bQD7gia8XlDnI8VLZObdjqxz98kqdZuNzW2jsR8AVnsHajL5tCCpNN8XEP7v1yN', '::1', 1681672697),
('309457', '956503', 'xFxpFfRt9adRV4PHFZi3EUXWow5L2suEyWNHbNoZeZadP81qmz819G8fwwcVqoIE', '::1', 1681675786),
('312713', '956503', 'iv5nyhbTIBVI253wfjum5KmMBnVAQdg70pycVIq60UlRhs5DZKSgZfj8wmzjsjFP', '::1', 1681675442),
('357153', '956503', 'OjSiU8QWF7guq5ernCesWmMSdeW6AxsLxI9F6cbEtZ9zylV1jcMKOfrvNM4V1Crl', '::1', 1681675175),
('410935', '956503', 'I74cNmFMhGX8CIiXkVx89VGqaAw3Z9JrxodX9m9Nra5DT24MaZFUwiMRmeeobzl4', '::1', 1681673881),
('444571', '956503', 'Kn3X1tTyKgzoLJ7kGO5OpMMBNx4KmNq5tkip6PDs8eforirVfcRJPnZI55fVr8lG', '::1', 1681673496),
('462559', '956503', 'aji5vcHv5xUyPVkgMSrm7SqImGwKac0kPxJnkVYHpPcvOk38l0uouySJLxcH2FyS', '::1', 1681673821),
('501729', '956503', 'GRVpBITpXDdoSVjO9eruzjcnvSGgIL8XJG4dlN05g7mpns6DP5PMuU0HaV92gGjx', '::1', 1681672234),
('522271', '956503', 'sBKKbgolYlUK5ZXgb4C4n1LtvIhK7nDO28wjZLwpGI7BNeUaVUG2MumuM9rccNbr', '::1', 1681675306),
('569621', '956503', 'uBcATtwZVI5lvWPXWxQh5LghPdMXe0DKFccL0nl1ZBUwKvURUboFnlr1ipOB0rOl', '::1', 1681671986),
('572194', '956503', 'rMbshov6eEI2s4L6R20UF3bXRP3meGgljrZPH8yvr0bnTdf8VyxM4u591UqBqBxv', '::1', 1681673850),
('607464', '956503', 'LjSJTYq3XjxLlWVzKxonQDtN1LSqPud4uTQMB26M454iRGy2t5Uw97HmmGPzXZLk', '::1', 1681673974),
('636554', '956503', 'mZUrhZhmpar2PNppz7KoaNW54cq9m1V4wic5ZuPgjt6aMJYv8uxxkZCV7j6mnZgf', '::1', 1681674599),
('640072', '956503', '1hE6t33RHqhvUReHCHRcOBQfiIV1V10oLtbAiAOeie8eBEdjoJIeHpyV7fCzy3aU', '::1', 1681675024),
('741034', '956503', 'K3uYJHEZ5oMTYqbJZE09vyVPL6Ip2EwGg4pBdKAIIrjz37NGnxa4tCsJRGobNEpl', '::1', 1681675250),
('806733', '956503', '45GNbAYNjCx3Z0nDPrSR42KrquHlhrOXPIsCEdJwMlsyLCyGXSxxYNmpMshbq9Tl', '::1', 1681674981),
('818158', '956503', '23jZ8ZntfCvT50QsXw4lTKIQ9xoAmbW3astQDNe5YUlDQf9DYMJqYsIkPDmcgNRU', '::1', 1681674380),
('836945', '956503', '0zgRXDG3l4aZA1jZTbBEF5QZNxcvMSLw1UsjA0PLu1jJn8W3XHb6lYR6j4XOBlAc', '::1', 1681675466),
('901933', '956503', 'v2JY5ycbb8VDgSQo5eBlkQBv3vIxeXUy24N6fVUb8CGRrWw03GxWTWJb9KJyOrJO', '::1', 1681676883);

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
