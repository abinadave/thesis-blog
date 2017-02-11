-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2016 at 12:27 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog_categories`
--

CREATE TABLE `blog_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `blog_categories`
--

INSERT INTO `blog_categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'programming', '2016-10-11 01:53:08', '2016-10-11 01:53:08'),
(2, 'products', '2016-10-11 01:53:44', '2016-10-11 01:53:44'),
(3, 'second', '2016-10-11 01:55:25', '2016-10-11 01:55:25'),
(4, 'second', '2016-10-11 02:23:04', '2016-10-11 02:23:04'),
(5, 'NA4NZGo', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(6, 'aG9e2F1', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(7, '5abn59e', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(8, 'FmY4hhm', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(9, 'UfRwcbx', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(10, 'dxSl822', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(11, 'B2I4TjG', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(12, 'a3BdgLU', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(13, 'CSAQLuG', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(14, 'LvZDeyK', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(15, 'HJHpP9O', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(16, 'P29SIAb', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(17, 'B2q5ksR', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(18, 'PMMYBln', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(19, 'ckAumGB', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(20, 'eLLjECi', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(21, 'OJktI5z', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(22, 'QJt4UYv', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(23, 'hZS6Yvk', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(24, 'GvCDU1s', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(25, 'Nt250hL', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(26, 'y6pxc8T', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(27, 'P3Aa4bR', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(28, 'OcyJ7Y7', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(29, 'xEXpZmO', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(30, 'D341oaR', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(31, '5VAZkND', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(32, 'wWiV87I', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(33, 'xcB01Pm', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(34, 'm7geJPt', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(35, 'Au66MC9', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(36, 'e9Bb0F7', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(37, 'Zw9Kp1m', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(38, 'qKIP3Pk', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(39, 'ILzimhA', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(40, 'n41yidn', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(41, '2ISYmtu', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(42, '9cItSTo', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(43, 'QMUgbhJ', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(44, 'NXmpjQd', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(45, '7czDKT9', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(46, 'vJWhC8R', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(47, 'WCNtwYm', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(48, 'fu7iNVO', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(49, 'cGXyQt6', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(50, 'zGQlCqL', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(51, '6BCPyJl', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(52, 'kXUA7pV', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(53, 'HPxVQbP', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(54, 'ihBxvVd', '2016-10-11 07:55:11', '2016-10-11 07:55:11'),
(55, 'aaewr', '2016-10-11 08:13:05', '2016-10-11 08:13:05'),
(56, 'programming', '2016-10-11 18:22:47', '2016-10-11 18:22:47'),
(57, 'nice category', '2016-10-11 20:43:16', '2016-10-11 20:43:16'),
(58, 'bad category', '2016-10-11 20:43:51', '2016-10-11 20:43:51'),
(59, 'Science', '2016-10-11 20:50:58', '2016-10-11 20:50:58'),
(60, 'Health', '2016-10-11 20:51:02', '2016-10-11 20:51:02'),
(61, 'Engineering', '2016-10-11 20:51:06', '2016-10-11 20:51:06'),
(62, '', '2016-10-11 21:00:50', '2016-10-11 21:00:50'),
(63, '', '2016-10-11 21:00:52', '2016-10-11 21:00:52');

-- --------------------------------------------------------

--
-- Table structure for table `blog_tags`
--

CREATE TABLE `blog_tags` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `blog_tags`
--

INSERT INTO `blog_tags` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Ms. Donna Corkery Jr.', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(2, 'Mrs. River Hane V', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(3, 'Vincenza Kirlin', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(4, 'Felipe Dietrich III', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(5, 'Johathan Altenwerth', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(6, 'Erwin Cassin', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(7, 'Tyreek Kessler', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(8, 'Brooklyn Sanford', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(9, 'Mrs. Lexi Bogisich Sr.', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(10, 'Dolores Lubowitz', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(11, 'Bryon Wisoky', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(12, 'Ms. Mya Beier DVM', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(13, 'Kaela Runolfsdottir', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(14, 'Morton O''Connell', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(15, 'Tobin Dietrich', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(16, 'Prof. Jarrett Greenfelder MD', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(17, 'Cleo Gaylord', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(18, 'Dr. Flavie Stracke', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(19, 'Ignacio Rodriguez III', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(20, 'Dr. Herman Koepp', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(21, 'Toy Brekke', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(22, 'Vivienne Skiles', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(23, 'Rita Schaefer', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(24, 'Ezequiel Smith II', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(25, 'Idella Harris', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(26, 'Brannon Ernser', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(27, 'Prof. Kirstin Daniel', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(28, 'Shanny Breitenberg Sr.', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(29, 'Dr. Carleton Wehner Jr.', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(30, 'Ewald Runte', '2016-10-11 07:52:44', '2016-10-11 07:52:44'),
(31, 'Kara Ankunding', '2016-10-11 07:53:17', '2016-10-11 07:53:17'),
(32, 'Emiliano Keebler', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(33, 'Dr. Brooks Rogahn Jr.', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(34, 'Prof. Ransom Bauch', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(35, 'Abigale Stark', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(36, 'Janis Littel', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(37, 'Adelia Funk Sr.', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(38, 'Schuyler Schiller', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(39, 'Sigmund Reilly', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(40, 'Mr. Henderson Weimann', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(41, 'Nicolas Bauch', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(42, 'Nannie Kunde DVM', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(43, 'Jalon Spinka', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(44, 'Mrs. Queen Mills DDS', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(45, 'Prof. Jamar Hirthe I', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(46, 'Alba Lemke', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(47, 'Izaiah Shields', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(48, 'Elvis Abbott', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(49, 'Prof. Sandra Emmerich III', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(50, 'Mrs. Corene Boyer', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(51, 'Harold Kohler', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(52, 'Graham Satterfield', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(53, 'Vella Farrell', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(54, 'Brenna Eichmann', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(55, 'Crystel Harris', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(56, 'Dr. Woodrow Larson Sr.', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(57, 'Prof. Aracely Gaylord', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(58, 'Jensen Maggio', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(59, 'Gloria Abernathy', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(60, 'Mrs. Sabryna Quitzon I', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(61, 'Janis Kessler', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(62, 'Bridie Medhurst II', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(63, 'Casimir Hahn', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(64, 'Aletha Runte III', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(65, 'Mr. Brannon Schaefer Jr.', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(66, 'Mrs. Abby Bogan', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(67, 'Ms. Ora Franecki Sr.', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(68, 'Kolby Lubowitz', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(69, 'Miss Aniyah Pollich', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(70, 'Ms. Maegan Ernser Sr.', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(71, 'Mrs. Gina Crona', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(72, 'Mrs. Adella Johnston', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(73, 'Mr. Bernardo King Sr.', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(74, 'Johan Farrell', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(75, 'Prof. Grant Murphy', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(76, 'Mitchell Morar', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(77, 'Joannie Dare', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(78, 'Hope Nikolaus', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(79, 'Brad Powlowski', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(80, 'Camylle Leannon', '2016-10-11 07:53:18', '2016-10-11 07:53:18'),
(81, 'aweaewr', '2016-10-11 08:10:13', '2016-10-11 08:10:13'),
(82, '', '2016-10-11 08:10:22', '2016-10-11 08:10:22'),
(83, 'tag344', '2016-10-11 08:11:01', '2016-10-11 08:11:01'),
(84, '', '2016-10-11 08:11:05', '2016-10-11 08:11:05'),
(85, '', '2016-10-11 08:11:12', '2016-10-11 08:11:12');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(11) NOT NULL,
  `reservation_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `size` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `qty` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `client_id`, `reservation_id`, `product_id`, `color`, `size`, `qty`, `created_at`, `updated_at`) VALUES
(1, 1, 0, 17, 'white', '10"', 5, '2016-10-12 22:01:48', '2016-10-12 22:01:48'),
(2, 0, 1, 17, 'white', '12"', 1, '2016-10-12 22:03:25', '2016-10-12 22:03:25'),
(3, 0, 1, 19, 'black', '8', 1, '2016-10-12 22:03:25', '2016-10-12 22:03:25'),
(4, 1, 0, 17, 'white', '10"', 5, '2016-10-12 22:06:25', '2016-10-12 22:06:25'),
(5, 1, 0, 17, 'white', '11"', 5, '2016-10-12 22:07:43', '2016-10-12 22:07:43');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'shoes', '', '2016-10-04 01:26:56', '2016-10-04 01:26:56'),
(5, 'dressess', '', '2016-10-04 01:27:43', '2016-10-04 01:27:43'),
(7, 'accessories', '', '2016-10-09 07:10:49', '2016-10-09 07:10:49'),
(8, 'bags', '', '2016-10-12 02:56:33', '2016-10-12 02:56:33'),
(9, 'daearwe', '', '2016-10-15 02:09:58', '2016-10-15 02:09:58'),
(10, 'under wears', '', '2016-10-15 02:17:46', '2016-10-15 02:17:46'),
(11, 'heels', '', '2016-10-15 02:19:22', '2016-10-15 02:19:22');

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` int(10) UNSIGNED NOT NULL,
  `pid` int(11) NOT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `pid`, `color`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 1, 'blue', 1, '2016-10-04 01:33:50', '2016-10-04 01:33:50'),
(2, 1, 'red', 1, '2016-10-04 01:33:50', '2016-10-04 01:33:50'),
(3, 1, 'green', 1, '2016-10-04 01:33:50', '2016-10-04 01:33:50'),
(4, 2, 'orange', 1, '2016-10-04 01:34:39', '2016-10-04 01:34:39'),
(5, 2, 'violet', 1, '2016-10-04 01:34:40', '2016-10-04 01:34:40'),
(6, 2, 'pink', 1, '2016-10-04 01:34:40', '2016-10-04 01:34:40'),
(7, 2, 'white', 1, '2016-10-04 01:34:40', '2016-10-04 01:34:40'),
(8, 3, 'blue', 1, '2016-10-04 19:28:52', '2016-10-04 19:28:52'),
(9, 3, 'red', 1, '2016-10-04 19:28:52', '2016-10-04 19:28:52'),
(10, 4, 'grey', 1, '2016-10-04 23:02:20', '2016-10-04 23:02:20'),
(11, 5, 'grey', 1, '2016-10-04 23:10:49', '2016-10-04 23:10:49'),
(12, 6, 'white', 1, '2016-10-04 23:48:44', '2016-10-04 23:48:44'),
(13, 7, 'blue', 1, '2016-10-05 00:06:56', '2016-10-05 00:06:56'),
(14, 7, 'red', 1, '2016-10-05 00:06:56', '2016-10-05 00:06:56'),
(15, 8, 'pink', 1, '2016-10-05 00:10:30', '2016-10-05 00:10:30'),
(16, 9, 'blue', 1, '2016-10-05 00:10:46', '2016-10-05 00:10:46'),
(17, 9, 'green', 1, '2016-10-05 00:10:46', '2016-10-05 00:10:46'),
(18, 10, 'black stripe', 1, '2016-10-05 01:39:17', '2016-10-05 01:39:17'),
(19, 11, 'white', 1, '2016-10-05 01:45:09', '2016-10-05 01:45:09'),
(20, 12, 'silver', 1, '2016-10-05 01:45:55', '2016-10-05 01:45:55'),
(21, 12, 'gold', 1, '2016-10-05 01:45:55', '2016-10-05 01:45:55'),
(22, 13, 'silver', 1, '2016-10-05 01:47:16', '2016-10-05 01:47:16'),
(23, 14, 'brown', 1, '2016-10-09 15:54:50', '2016-10-09 15:54:50'),
(24, 15, 'gold', 1, '2016-10-09 15:55:34', '2016-10-09 15:55:34'),
(25, 15, 'silver', 1, '2016-10-09 15:55:34', '2016-10-09 15:55:34'),
(26, 16, 'gold', 1, '2016-10-09 15:56:54', '2016-10-09 15:56:54'),
(27, 16, 'silver', 1, '2016-10-09 15:56:54', '2016-10-09 15:56:54'),
(28, 17, 'white', 1, '2016-10-09 15:57:37', '2016-10-09 15:57:37'),
(29, 18, 'blue', 1, '2016-10-12 02:50:20', '2016-10-12 02:50:20'),
(30, 18, 'red', 1, '2016-10-12 02:50:20', '2016-10-12 02:50:20'),
(31, 19, 'black', 1, '2016-10-12 18:37:29', '2016-10-12 18:37:29'),
(32, 20, 'brown', 1, '2016-10-12 18:40:33', '2016-10-12 18:40:33'),
(33, 21, 'small', 1, '2016-10-14 21:37:24', '2016-10-14 21:37:24'),
(34, 21, 'large', 1, '2016-10-14 21:37:24', '2016-10-14 21:37:24'),
(35, 23, 'small', 1, '2016-10-14 21:46:10', '2016-10-14 21:46:10'),
(36, 23, 'large', 1, '2016-10-14 21:46:10', '2016-10-14 21:46:10'),
(37, 23, 'medium', 1, '2016-10-14 21:46:10', '2016-10-14 21:46:10'),
(38, 23, 'XL', 1, '2016-10-14 21:46:10', '2016-10-14 21:46:10'),
(39, 23, 'XXL', 1, '2016-10-14 21:46:10', '2016-10-14 21:46:10'),
(40, 23, 'xs', 1, '2016-10-14 21:46:10', '2016-10-14 21:46:10'),
(41, 24, 'small', 1, '2016-10-14 22:07:51', '2016-10-14 22:07:51'),
(42, 24, 'large', 1, '2016-10-14 22:07:51', '2016-10-14 22:07:51'),
(43, 25, 'lbue', 1, '2016-10-15 00:00:32', '2016-10-15 00:00:32'),
(44, 25, 'red', 1, '2016-10-15 00:00:32', '2016-10-15 00:00:32');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `message` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `name`, `email`, `date`, `phone`, `message`, `created_at`, `updated_at`) VALUES
(1, 'jane doe', 'janedoe@gmail.com', 'October 12, 2016 18:21:25', '09089988765', 'this is my message\n', '2016-10-12 02:21:26', '2016-10-12 02:21:26');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_10_12_000000_create_users_table', 1),
('2014_10_12_100000_create_password_resets_table', 1),
('2016_09_30_141303_create_category_table', 1),
('2016_10_01_131646_create_products_table', 1),
('2016_10_02_133550_create_colors_table', 1),
('2016_10_03_030037_create_sizes', 1),
('2016_10_09_051141_create_reservations_table', 2),
('2016_10_09_062504_create_carts_table', 3),
('2016_10_09_141004_create_messages_table', 4),
('2016_10_10_055343_add_user_id_column_to_reservations_table', 5),
('2016_10_11_093313_create_blog_categories_table', 6),
('2016_10_11_153321_create_blog_tags_table', 7),
('2016_10_12_095912_add_column_messages_table', 8),
('2016_10_13_055744_add_column_carts_table', 9);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `category` int(11) NOT NULL,
  `prize` double(10,2) NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `filename` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `category`, `prize`, `description`, `filename`, `created_at`, `updated_at`) VALUES
(1, 'shoe 101.1', 1, 860.00, 'this is good for shoe 1', '1608045391000-2016092913452500-b8ab6399sassy-classy-boot_large.jpg', '2016-10-04 01:33:50', '2016-10-04 19:27:18'),
(2, 'shoe 2', 1, 350.00, 'this is good for shoe 2', '1608168124000-2016082511392800-535f9457gelato-lace-up-heel-in-sage_large.jpg', '2016-10-04 01:34:39', '2016-10-04 18:52:59'),
(3, 'shoe 3', 1, 900.00, 'this is the best shoe ever.', '1609267778000-2016100308430700-ab3cfd46nia-thigh-high-boot_large.jpg', '2016-10-04 19:28:52', '2016-10-04 19:29:04'),
(4, 'LATTE LOVELY PLAID PONCHO', 5, 390.00, 'this is for christmass', '1609167354000-2016092909574000-6aedc584latte-lovely-plaid-poncho_large.jpg', '2016-10-04 23:02:20', '2016-10-04 23:03:45'),
(5, 'FOREVER YOURS LACE UP SWEATER', 5, 420.00, 'Here is a secret style life-hack tip that every girl needs to know...If you want to feel as if you are wearing a cozy blanket all day, but still incredibly chic then ponchos are for you! Throw the Latte Lovely Poncho on top of any outfit and the cozy fact', '1609219105000-2016092916491800-ad7de2f6forever-yours-lace-up-sweater_large.jpg', '2016-10-04 23:10:49', '2016-10-04 23:11:05'),
(6, 'You''re Getting Warmer Cardigan in Ivory', 5, 39.00, 'Snuggle in a little closer and wrap yourself up in the You’re Getting Warmer Cardigan! Pair this with any outfit for an instant cozy update! This sweater is unlined and has an oversized fit.\n', '1609217951000-2016092814103500-067c44f5youre-getting-warmer-cardigan-in-ivory_1024x1024.jpg', '2016-10-04 23:48:44', '2016-10-04 23:49:06'),
(10, 'PLAID TO THE BONE SHIFT DRESS', 5, 420.00, 'This adorable little number will be a highlight in your closet for sure! Pair it with your favorite boots for a look that can’t be beat! This dress is unlined and includes rollable sleeves.', '1609077929000-2016092111102900-67ce7e5dwalk-my-way-lace-dress-in-wine_large.jpg', '2016-10-05 01:39:17', '2016-10-05 01:47:33'),
(11, 'NYC SPARKLES SHIFT DRESS', 5, 420.00, 'For your next event, dress to impress in this ah-mazingly glamorous dress! We are completely over the moon for the gorgeous beaded neckline! This dress is lined and features button closures at the neck', '1609144373000-2016092611471200-d03dc039between-the-lines-floral-shift-dress-in-wine_large.jpg', '2016-10-05 01:45:09', '2016-10-05 01:47:38'),
(12, 'SHOOTING STAR SHIFT DRESS IN CHAMPAGNE', 5, 390.00, 'Shimmy your way into the spotlight in the Shooting Star Shift Dress! Featuring the oh so chic cold shoulder and the always comfortable shift silhouette this dress is a perfect choice for your next event! This dress is lined. ', '1609144790000-2016092609561500-e433867cbetween-the-lines-floral-shift-dress-in-grey_large.jpg', '2016-10-05 01:45:55', '2016-10-05 01:47:43'),
(13, 'SHOOTING STAR SHIFT DRESS IN CHROME', 5, 390.00, 'Shimmy your way into the spotlight in the Shooting Star Shift Dress! Featuring the oh so chic cold shoulder and the always comfortable shift silhouette this dress is a perfect choice for your next event! This dress is lined. ', '1609293354000-2016100309431500-ea4f7349plaid-to-the-bone-shift-dress_large.jpg', '2016-10-05 01:47:16', '2016-10-05 04:48:19'),
(14, 'BEANIE BEAUTIFUL IN BEIGE BLEND', 7, 650.00, 'As shown', '1609214429000-2016092916542700-225f41bavip-travels-choker_1024x1024.jpg', '2016-10-09 15:54:50', '2016-10-09 15:56:03'),
(15, 'SIMPLY BEAUTIFUL INFINITY SCARF IN CRIMSON', 7, 220.00, 'As shown', '1609158318000-2016092316273700-bab24371lace-talk-later-choker-necklace_1024x1024.jpg', '2016-10-09 15:55:34', '2016-10-09 15:55:58'),
(16, 'COZY CHIC INFINITY SCARF IN GREY', 7, 180.00, 'As shown', '1609218112000-2016092916503900-815a56c2the-after-party-choker_1024x1024.jpg', '2016-10-09 15:56:54', '2016-10-09 15:57:53'),
(17, 'CALL ME LOVELY NECKLACE IN WHITE', 7, 160.00, 'As shown', '1609209678000-2016092609413800-03a69f35geela-heel_large.jpg', '2016-10-09 15:57:37', '2016-10-12 18:45:01'),
(19, 'SAGITTA METALLIC GOLD ANKLE BOOTIE', 1, 490.00, 'As Shown', '1608228381000-2016091514564100-adb08aeacentella-heel_large.jpg', '2016-10-12 18:37:29', '2016-10-12 18:38:07'),
(20, 'FOREVER YOURS LACE UP SWEATER', 1, 1600.00, 'As Shown', '1609201489000-2016092315211100-5a3f628dsansa-faux-suede-boot_large.jpg', '2016-10-12 18:40:33', '2016-10-12 18:40:48'),
(21, 'title 2', 1, 600.00, 'thsi is good hey', '1607077150000-2016081608065800-3f43784csound-fringe-bootie-in-black_large.jpg', '2016-10-14 21:37:24', '2016-10-15 01:05:23'),
(22, 'title 3', 1, 600.00, 'this is good description for an item', '1607196707000-2016072915261700-24b95707barnes-lace-up-heel-in-army-green_large.jpg', '2016-10-14 21:40:01', '2016-10-15 01:05:15'),
(23, 'title4', 5, 600.00, 'This is great', '1609281120000-2016092910075700-30774039nyc-sparkles-shift-dress_large.jpg', '2016-10-14 21:46:10', '2016-10-15 01:05:43'),
(24, 'item 6', 5, 760.00, 'nice dress for girls', 'Penguins.jpg', '2016-10-14 22:07:51', '2016-10-15 00:32:28'),
(25, 'nice product', 8, 690.00, 'nice and cool', 'Tulips.jpg', '2016-10-15 00:00:32', '2016-10-15 00:36:11');

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `company` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `postal` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `user_id`, `email`, `firstname`, `lastname`, `company`, `address`, `city`, `postal`, `phone`, `created_at`, `updated_at`) VALUES
(1, 0, 'client1@gmail.com', 'jane', 'doe', 'lkjawer', 'lkjawer', 'lkjawer', 'lkjawer', '09098899876', '2016-10-12 22:03:24', '2016-10-12 22:03:24');

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `id` int(10) UNSIGNED NOT NULL,
  `pid` int(11) NOT NULL,
  `size` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`id`, `pid`, `size`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 1, 'small', 1, '2016-10-04 01:33:50', '2016-10-04 01:33:50'),
(2, 2, 'smal', 1, '2016-10-04 01:34:40', '2016-10-04 01:34:40'),
(3, 2, 'large', 1, '2016-10-04 01:34:40', '2016-10-04 01:34:40'),
(4, 3, 'small', 1, '2016-10-04 19:28:52', '2016-10-04 19:28:52'),
(5, 3, 'large', 1, '2016-10-04 19:28:52', '2016-10-04 19:28:52'),
(6, 4, 'small', 1, '2016-10-04 23:02:20', '2016-10-04 23:02:20'),
(7, 4, 'medium', 1, '2016-10-04 23:02:20', '2016-10-04 23:02:20'),
(8, 5, 'small', 1, '2016-10-04 23:10:49', '2016-10-04 23:10:49'),
(9, 6, 'small', 1, '2016-10-04 23:48:44', '2016-10-04 23:48:44'),
(10, 6, 'medium', 1, '2016-10-04 23:48:44', '2016-10-04 23:48:44'),
(11, 6, 'large', 1, '2016-10-04 23:48:44', '2016-10-04 23:48:44'),
(12, 7, 'small', 1, '2016-10-05 00:06:56', '2016-10-05 00:06:56'),
(13, 8, 'small', 1, '2016-10-05 00:10:30', '2016-10-05 00:10:30'),
(14, 8, 'medium', 1, '2016-10-05 00:10:30', '2016-10-05 00:10:30'),
(15, 9, 'small', 1, '2016-10-05 00:10:46', '2016-10-05 00:10:46'),
(16, 9, 'large', 1, '2016-10-05 00:10:46', '2016-10-05 00:10:46'),
(17, 9, 'medium', 1, '2016-10-05 00:10:46', '2016-10-05 00:10:46'),
(18, 10, 'small', 1, '2016-10-05 01:39:17', '2016-10-05 01:39:17'),
(19, 10, 'medium', 1, '2016-10-05 01:39:17', '2016-10-05 01:39:17'),
(20, 10, 'large', 1, '2016-10-05 01:39:17', '2016-10-05 01:39:17'),
(21, 11, 'small', 1, '2016-10-05 01:45:09', '2016-10-05 01:45:09'),
(22, 12, 'small', 1, '2016-10-05 01:45:55', '2016-10-05 01:45:55'),
(23, 12, 'medium', 1, '2016-10-05 01:45:55', '2016-10-05 01:45:55'),
(24, 12, 'large', 1, '2016-10-05 01:45:55', '2016-10-05 01:45:55'),
(25, 13, 'small ', 1, '2016-10-05 01:47:16', '2016-10-05 01:47:16'),
(26, 14, 'small', 1, '2016-10-09 15:54:50', '2016-10-09 15:54:50'),
(27, 14, 'medium', 1, '2016-10-09 15:54:50', '2016-10-09 15:54:50'),
(28, 15, 'small', 1, '2016-10-09 15:55:34', '2016-10-09 15:55:34'),
(29, 16, '6"', 1, '2016-10-09 15:56:54', '2016-10-09 15:56:54'),
(30, 16, '7"', 1, '2016-10-09 15:56:54', '2016-10-09 15:56:54'),
(31, 16, '8"', 1, '2016-10-09 15:56:54', '2016-10-09 15:56:54'),
(32, 17, '10"', 1, '2016-10-09 15:57:37', '2016-10-09 15:57:37'),
(33, 17, '11"', 1, '2016-10-09 15:57:37', '2016-10-09 15:57:37'),
(34, 17, '12"', 1, '2016-10-09 15:57:37', '2016-10-09 15:57:37'),
(35, 18, '9', 1, '2016-10-12 02:50:20', '2016-10-12 02:50:20'),
(36, 18, '10', 1, '2016-10-12 02:50:20', '2016-10-12 02:50:20'),
(37, 19, '8', 1, '2016-10-12 18:37:29', '2016-10-12 18:37:29'),
(38, 20, '9', 1, '2016-10-12 18:40:33', '2016-10-12 18:40:33'),
(39, 20, '10', 1, '2016-10-12 18:40:33', '2016-10-12 18:40:33'),
(40, 20, '11', 1, '2016-10-12 18:40:33', '2016-10-12 18:40:33'),
(41, 20, '12', 1, '2016-10-12 18:40:33', '2016-10-12 18:40:33'),
(42, 21, 'blue', 1, '2016-10-14 21:37:24', '2016-10-14 21:37:24'),
(43, 21, 'red', 1, '2016-10-14 21:37:24', '2016-10-14 21:37:24'),
(44, 21, 'green', 1, '2016-10-14 21:37:24', '2016-10-14 21:37:24'),
(45, 23, 'blue', 1, '2016-10-14 21:46:10', '2016-10-14 21:46:10'),
(46, 23, 'red', 1, '2016-10-14 21:46:10', '2016-10-14 21:46:10'),
(47, 23, 'gree', 1, '2016-10-14 21:46:10', '2016-10-14 21:46:10'),
(48, 24, 'blue', 1, '2016-10-14 22:07:51', '2016-10-14 22:07:51'),
(49, 24, 'red', 1, '2016-10-14 22:07:51', '2016-10-14 22:07:51'),
(50, 24, 'green', 1, '2016-10-14 22:07:51', '2016-10-14 22:07:51'),
(51, 25, 'small', 1, '2016-10-15 00:00:32', '2016-10-15 00:00:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`, `admin`) VALUES
(1, 'john doe', 'johndoe@gmail.com', '$2y$10$ly6akBxdTIlREfj2GCW1wOJ8gtaSloFe5hJ7kdsJ8uvVz0YuJUcAS', 'TuHp6o4WoZyfQEl2HbYZKwNTNjqvOCL536tifEndbnly6P1btCi33IEZqK2v', '2016-10-04 01:21:24', '2016-10-14 05:54:44', 1),
(2, 'jane doe', 'janedoe@gmail.com', '$2y$10$8xsrVi3rbUqFiWiBKUqsveblGIH.UY8BiHYvMkkMPzRmWh5ERRXa2', 'jYppTtR9Qj7Q1LjR0hTjZcW63YaN4WdA96gsM8rymQpc8hvaDIVgC1ipujqf', '2016-10-09 00:43:43', '2016-10-12 22:07:49', 0),
(3, 'awer awer', 'awerawer@gmail.com', 'password', NULL, '2016-10-09 19:19:44', '2016-10-09 19:19:44', 0),
(4, 'lakwjer lkjawer', 'aweraweraewraewrawer@gmail.com', '$2y$10$xpYgBKHM.EbGyN/aXtqe.eNCvyclfr3mXWYpmAQhUkagPFgC1GGUq', NULL, '2016-10-09 19:26:35', '2016-10-09 19:26:35', 0),
(5, 'ethan abina', 'ethanabina@gmail.com', '$2y$10$VfB0Z.cD.eN/GfrfCwipkOKhzs8NVN1dsC.7dxBIMo/cqbY3FPjwi', NULL, '2016-10-09 21:46:27', '2016-10-09 21:46:27', 0),
(6, 'jaybee sebastian', 'jaybee_sebastian@yahoo.com.ph', '$2y$10$uD72v7Y5jLigrmUOhSU1POxy8Y/7ukAwLNzoGFLuKI6nmUL4petyS', 'BX3scel2uGvpw5yovzUh6lEf98RYoCGg5hssm9m1yPiieHWQ8nh7FYrJ1oYt', '2016-10-09 22:02:51', '2016-10-09 22:03:31', 0),
(7, 'donal bausal', 'donaldbausal@gmail.com', '$2y$10$jkY.Jr9E.fF//Lc2c.ULIu3fVqfSZJQwShNb6cdzsZndMz6j.o0Bu', 'NE75VnbuuaTfZqX5UNkszCpZGzRohk2qVaui2KtemEmQgkXqeYvX6BNLBcld', '2016-10-12 18:46:06', '2016-10-12 22:02:08', 0),
(8, 'jane doe', 'client1@gmail.com', '$2y$10$pdymJcYGXgq/KUQyoMnq1euUs1OAYN1nyg393LD5gOPxDEwJS189O', 'KZMxpR8iylLMpHUQkuYJsGAytExo0tkXiHegp5UjNV2C3jQNGc5wLIHbpe3s', '2016-10-12 22:03:23', '2016-10-12 22:05:47', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog_categories`
--
ALTER TABLE `blog_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_tags`
--
ALTER TABLE `blog_tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog_categories`
--
ALTER TABLE `blog_categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
--
-- AUTO_INCREMENT for table `blog_tags`
--
ALTER TABLE `blog_tags`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
