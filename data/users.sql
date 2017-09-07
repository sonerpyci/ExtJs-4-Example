-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 07 Eyl 2017, 14:31:47
-- Sunucu sürümü: 10.1.25-MariaDB
-- PHP Sürümü: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `deneme`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `surname` varchar(25) NOT NULL,
  `phone` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `phone`) VALUES
(17, 'asdasdtrte', 'sadasdasdgreh', 'asfasfasf'),
(21, 'qweqwr', 'asfsagasg', '132124125'),
(22, 'Swqeqwnr', 'Pqwrqyc', '1234'),
(24, 'fghj', 'asdfg', '123456'),
(28, 'gfsg', 'fdsf', 'fdsf'),
(29, 'q2144', '1231', '21414'),
(30, 'wqeqweq', 'wqeqwrq', 'qwrqwrqwrqwr'),
(31, '1', '1', '1'),
(32, '1', '1', '1'),
(35, '1234', '4321', '12312'),
(36, 'dsfg', 'sdgsdg', 'sdgs'),
(37, 'SDFS', 'asdasd', '21312412'),
(38, 'asdasda', 'sadasdasd', 'asdasd'),
(39, 'asdasd', 'sadasd', 'asdasdasd'),
(40, 'qwewqeqwe', 'qweqwe', '123124'),
(41, 'qweqwe', 'qweqweqwe', '1231241'),
(42, 'qwqwe', 'qwrqwrq', '12345125125'),
(43, 'wwqweqe', 'qwqwrqwr', '1231241'),
(45, 'John', 'Doe', '123456789'),
(46, 'Eric', 'Clapton', '9876531');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
