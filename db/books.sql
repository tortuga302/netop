-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 04 Apr 2016 la 10:55
-- Versiune server: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vl_net`
--

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `books`
--

CREATE TABLE `books` (
  `id` int(4) NOT NULL,
  `name` varchar(30) NOT NULL,
  `author` varchar(45) NOT NULL,
  `pages` int(50) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `books`
--

INSERT INTO `books` (`id`, `name`, `author`, `pages`, `type`) VALUES
(1, '2000 de leghe sub mari', 'Jules Verne', 768, 'Fantezy'),
(2, 'Tarzan', 'Edgar Rice Bauroughs', 289, 'SF'),
(3, 'xxxx', 'yyyyy', 455, 'Fantezy'),
(4, 'Iris', 'John Doe', 1054, 'Romance'),
(5, 'Resources', 'dddd', 452, 'Techincal'),
(6, 'Cooking', 'Gigi', 120, 'Lifestyle'),
(7, 'Rambo', 'Edwin', 246, 'Action'),
(15, '12', 'rerer', 3434, 'fdfdfd'),
(16, 'rrr', 'rrr', 234, 'wrrrrr');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
