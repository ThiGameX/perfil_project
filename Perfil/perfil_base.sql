-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25-Jul-2020 às 23:52
-- Versão do servidor: 10.4.13-MariaDB
-- versão do PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `perfil_base`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `diaryContent` text NOT NULL DEFAULT '',
  `wishes` text NOT NULL DEFAULT '',
  `photo_url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `user`, `password`, `diaryContent`, `wishes`, `photo_url`) VALUES
(1, 'WERDAN-ADMIN', '38081b8c436c2ea31a58dea9c63a8e3c', '06/07 - s - manha\n07/07 - n - n\n08/07 - s - tarde\n09/07 - n - n\n10/07 - s - tarde\n11/ 07 - n - n\n12/07 - s - tarde\n13/07 - n - n\n14/07 - s - manha\n15/07 - n - n\n16/07 - s - manha\n17/07 - n - n\n18/07 - s - noite\n19/07 - n - n\n20/07 - s - manha\n21/07 - n - n\n22/07 - s - manha\n23/07 - n - n\n24/07 - x - xxxx\n25/07 - x - xxxx\n26/07 - x - xxxx\n27/07 - x - xxxx\n28/07 - x - xxxx', '', 'https://i.pinimg.com/736x/64/ed/21/64ed21f55675162a43e425eeef3057b3.jpg'),
(10, 'ima', 'e7d80ffeefa212b7c5c55700e4f7193e', '                  diario do ima\n\ndia 1 - resolvi bastante prob legal\n\ndia 2 - cabo de comecar kk\ndia 2 att - adicionei bastante coisa :)\ndia 2 att 2 - só no pod do metaforando\ndia 2 att 3 - resolv prob que nao deu ont\n\ndia 3 - comecei add tela sem login\n\ndia 5? - arrumei prob de deixar sem pass\ndia 5? - nem acabei do dia 3 kkkk\ndia 5? - mais prob resolvido\ndia 5? - funcionalidades adicionadas\n\ndia 6 - comecei a adicionar sessions\ndia 6 - teste sessions\ndia 6 - teste \'aspas\' e \"ASPAS\"\ndia 6 - lembrar no dia 7 de fix:\n    - user not in perfil\n    - not saving photo in base\n\ndia 7 - fixado prob do dia 6\ndia 7? - dps de mt tempo add popup dinamico', 'money money money', 'https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png'),
(12, 'GATO', 'dc89c900da650ab81f94d6be6006c51a', 'eu sou gatao', '', 'https://i.imgur.com/7Ao6HgR.png'),
(15, 'TheNew', '533739f1961925c43695625b8f33ab7d', '', '', 'https://cdn.hiptoro.com/wp-content/uploads/2020/04/Demon-Slayer-Kimetsu-no-Yaiba-Chapter-202-Release-Date-Spoilers-Tanjiro-to-become-the-Demon-King.jpg'),
(16, 'TheLast', '533739f1961925c43695625b8f33ab7d', 'cabei de logar mann', '', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBHldPGXa5e9sm2okExj_zPb3CG6CMa8g0wQ&usqp=CAU'),
(17, 'xxandrexx', '40b064405169ca2ce0ebeeff2f083beb', 'perdi no vava', '', 'https://i.pinimg.com/originals/94/ef/13/94ef133cd4abe17bf4c70e13ccf7f45d.jpg'),
(22, 'gaguinho', '678cb3586c12d73ac42fdd3d54e7e262', 'r-r-respeit-t-t-ta o g-ga-ga-guinho p-pô\n\nga-ga-guinho r-rei d-d-d-delas ', '', 'https://static-cdn.jtvnw.net/jtv_user_pictures/305dd3f6-80d7-4427-9f58-28fe0104fafe-profile_image-300x300.png'),
(24, 'Thiaguinho', '7bbea907a4a9109c1f1327103a755251', '', '', '');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
