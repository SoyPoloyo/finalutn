-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-01-2020 a las 16:24:05
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ng_games_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `description` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `image` varchar(300) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `game`
--

INSERT INTO `game` (`id`, `user_id`, `title`, `description`, `image`, `created_at`) VALUES
(2, 2, 'Mario y Sonic', 'Mario y Sonico en los juegos olimpicos', 'https://cdn01.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_MarioAndSonicAtTheOlympicGamesTokyo2020_esES_image500w.jpg', '2020-01-18 07:08:58'),
(3, 2, 'Days Gone', 'juego de zombies bien cabron', 'https://images-na.ssl-images-amazon.com/images/I/81o78J8sfnL._SX385_.jpg', '2020-01-18 07:12:24'),
(4, 3, 'mortal kombat 11', 'un juego bien chingon de peleas', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dwf8caf397/images/imagenes-productos/743/650795-0000-001.jpg?sw=513&sh=654&sm=fit', '2020-01-18 07:11:55'),
(5, 3, 'ilustrador', 'para dibujar', 'https://i.pinimg.com/originals/65/dd/1d/65dd1d570e1d41983f5ee5db5163ed60.png', '2020-01-18 18:16:04'),
(6, 4, 'prueba id', 'blabla', '', '2020-01-18 18:45:26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `misiones`
--

CREATE TABLE `misiones` (
  `id` int(11) NOT NULL,
  `card_id` int(11) NOT NULL,
  `nombre_mision` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `texto_mision` varchar(500) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `misiones`
--

INSERT INTO `misiones` (`id`, `card_id`, `nombre_mision`, `texto_mision`, `created_at`) VALUES
(1, 0, 'Ir a la ciudad verde', 'buscar la forma de llegar a la ciudad verde en la parte inferior del mapa', '2020-01-23 21:00:38'),
(2, 0, 'prueba3', 'asdsadasdsadsadsadsadasdsa', '2020-01-28 21:32:04'),
(3, 0, 'nueva prueba', 'esta es la prueba final', '2020-01-28 21:32:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajes`
--

CREATE TABLE `personajes` (
  `id` int(11) NOT NULL,
  `card_id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `imagen` varchar(300) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `personajes`
--

INSERT INTO `personajes` (`id`, `card_id`, `nombre`, `descripcion`, `imagen`, `created_at`) VALUES
(1, 2, 'Thor', 'dios del trueno', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Horizon_Zero_Dawn.jpg/220px-Horizon_Zero_Dawn.jpg', '2020-01-23 22:21:39'),
(2, 3, 'Loki', 'dios de las bromas', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Horizon_Zero_Dawn.jpg/220px-Horizon_Zero_Dawn.jpg', '2020-01-23 22:21:42'),
(7, 0, 'prueba2', 'prueba final', '', '2020-01-28 21:33:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `password`, `created_at`) VALUES
(1, 'admin', 'admin', '2020-01-09 04:55:24'),
(2, 'admin2', 'admin', '2020-01-18 07:05:22'),
(3, 'admin3', 'admin', '2020-01-18 07:06:05'),
(4, 'admin4', 'admin1', '2020-01-18 18:44:49');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `misiones`
--
ALTER TABLE `misiones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personajes`
--
ALTER TABLE `personajes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `misiones`
--
ALTER TABLE `misiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `personajes`
--
ALTER TABLE `personajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
