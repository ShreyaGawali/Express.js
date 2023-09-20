-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2023 at 04:15 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dsmanagement`
--

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `total_price` int(10) NOT NULL,
  `status` enum('0','1') NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `product_id`, `total_price`, `status`, `created`) VALUES
(1, 101, 500, '1', '2023-09-06'),
(2, 102, 567, '1', '2023-09-07'),
(3, 103, 650, '1', '2023-09-05');

-- --------------------------------------------------------

--
-- Table structure for table `shipping`
--

CREATE TABLE `shipping` (
  `id` int(10) NOT NULL,
  `billing_first_name` varchar(255) NOT NULL,
  `billing_last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `billing_address` text NOT NULL,
  `billing_zipcode` int(10) NOT NULL,
  `billing_country` varchar(255) NOT NULL,
  `billing_city` varchar(255) NOT NULL,
  `order_id` int(10) NOT NULL,
  `status` enum('0','1') NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shipping`
--

INSERT INTO `shipping` (`id`, `billing_first_name`, `billing_last_name`, `email`, `password`, `billing_address`, `billing_zipcode`, `billing_country`, `billing_city`, `order_id`, `status`, `created`) VALUES
(1, 'Shreya', 'Gawali', 'shreya@gmail.com', 'f430d1f5d67e8da6a429a0417a537e1c', 'Mahal', 440032, 'India', 'Nagpur', 1, '1', '2023-09-06'),
(2, 'Ram', 'Anand', 'ram@gmail.com', 'cac83c3b05882ff70e2716ae8668e5c9', 'Burdi', 440002, 'India', 'Nagpur', 2, '1', '2023-09-05'),
(3, 'Sai', 'Shinde', 'Sai@gmail.com', '1ceb082a6a9d49504dc1cb01e63944f9', 'Baner', 41001, 'India', 'Pune', 3, '1', '2023-09-06'),
(4, 'kirti', 'jadhav', 'kirti@gmail.com', '5dd2c0a2f6cb4ef400253002692ec9e2', 'kharbi', 440022, 'India', 'Nagpur', 1, '1', '2023-09-12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shipping`
--
ALTER TABLE `shipping`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `shipping`
--
ALTER TABLE `shipping`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `shipping`
--
ALTER TABLE `shipping`
  ADD CONSTRAINT `OrderID` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
