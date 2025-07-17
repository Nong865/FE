c8999999', 'fffffffhhhh', '2025-06-12', '229.00', '', 1, 11),
(34, 'DH-3516', 3, 'Nguyen viet anh', 'vietanh@gmail.com', '08999999', 'fffffffhhhh', '2025-06-12', '159.00', '', 1, 9),
(35, 'DH-7264', 3, 'Nguyen viet anh', 'vietanh@gmail.com', '08999999', 'fffffffhhhh', '2025-06-12', '799.00', '', 1, 9),
(36, 'DH-7390', 3, 'Nguyen viet anh', 'vietanh@gmail.com', '08999999', 'fffffffhhhh', '2025-06-12', '799.00', '', 1, 11),
(37, 'DH-9174', 3, 'Nguyen viet anh', 'vietanh@gmail.com', '08999999', 'fffffffhhhh', '2025-06-12', '229.00', '', 1, 9),
(38, 'DH-3811', 3, 'Nguyen viet anh', 'vietanh@gmail.com', '08999999', 'fffffffhhhh', '2025-06-12', '430.00', '', 1, 9),
(39, 'DH-5613', 3, 'Nguyen viet anh', 'vietanh@gmail.com', '08999999', 'fffffffhhhh', '2025-06-12', '499.00', '', 1, 9),
(40, 'DH-3959', 5, 'anh', 'quangnamclient@gmail.com', '0823736192', 'Hanoi', '2025-06-17', '99.00', '', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `gio_hangs`
--

CREATE TABLE `gio_hangs` (
  `id` int NOT NULL,
  `tai_khoan_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hinh_anh_san_phams`
--

CREATE TABLE `hinh_anh_san_phams` (
  `id` int NOT NULL,
  `san_pham_id` int NOT NULL,
  `link_hinh_anh` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `phuong_thuc_thanh_toans`
--

CREATE TABLE `phuong_thuc_thanh_toans` (
  `id` int NOT NULL,
  `ten_phuong_thuc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `phuong_thuc_thanh_toans`
--

INSERT INTO `phuong_thuc_thanh_toans` (`id`, `ten_phuong_thuc`) VALUES
(1, 'Thanh toán khi nhận hàng'),
(2, 'Thanh toán online');

-- --------------------------------------------------------

--
-- Table structure for table `san_phams`
--

CREATE TABLE `san_phams` (
  `id` int NOT NULL,
  `ten_san_pham` varchar(255) NOT NULL,
  `gia_san_pham` decimal(10,2) NOT NULL,
  `gia_khuyen_mai` decimal(10,2) DEFAULT NULL,
  `hinh_anh` varchar(255) DEFAULT NULL,
  `so_luong` int NOT NULL,
  `luot_xem` int DEFAULT '0',
  `ngay_nhap` date NOT NULL,
  `mo_ta` text,
  `danh_muc_id` int NOT NULL,
  `trang_thai` tinyint NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `san_phams`
--

INSERT INTO `san_phams` (`id`, `ten_san_pham`, `gia_san_pham`, `gia_khuyen_mai`, `hinh_anh`, `so_luong`, `luot_xem`, `ngay_nhap`, `mo_ta`, `danh_muc_id`, `trang_thai`) VALUES
(1, 'Áo Sơ Mi Nam Dài Tay Túi Kiểu', '549.00', '549.00', './uploads/17491483081748356826somidaitay.webp', 0, 10, '2025-06-06', 'Chất liệu: vải sơ mi cotton lóng chéo twill\r\nThành phần:70% Cotton, 30% Tencel', 1, 1),
(2, 'Áo Khoác Nam Bomber Bổ Ngực', '799.00', '799.00', './uploads/174842544717483688601748358335z6645528543498_d30512be39a6b7320200f52638c575dd.jpg', 145, 20, '2025-05-01', 'Áo khoác bomber nam cá tính với thiết kế bổ ngực trẻ trung, năng động. Sản phẩm co giãn 4 chiều thoải mái, cản gió giữ ấm hiệu quả nhờ chất liệu nylon cao cấp và kiểu dệt đặc biệt. Sợi spandex cho phép áo co giãn tối đa, thoải mái mọi hoạt động.', 1, 1),
(3, 'Áo Polo Yoguu Phối Thân Có Kéo Khoá', '449.00', '430.00', './uploads/174842558617483687961748358375z6645528569031_119cf763657974b2d111de99032bebd5.jpg', 87, 0, '2025-05-01', 'Trẻ trung, hiện đại với thiết kế áo polo Unisex mới của nhà YODY. Chất liệu nỉ double face dày dặn. Bề mặt được xử lý sạch xơ thừa đem đến cảm giác mặc mềm mại, chạm lên da dễ chịu. Áo không gây bí nóng mà thông thoáng với thành phần chính là sợi cotton, bền chắc hơn và hạn chế nhăn nhàu nhờ có polyester đồng thời co giãn đàn hồi tốt do có chứa thành phần spandex.', 1, 1),
(4, 'Áo Khoác Nam Bomber Phối Lót', '899.00', '899.00', './uploads/17484255221748358406z6645528596455_59d99317fb09a31a63a9ca0f422e2cb4.jpg', 0, 0, '2025-06-06', '', 1, 2),
(5, 'Áo Yoguu Sweater In Chữ', '499.00', '249.00', './uploads/174842566117483692321748358319z6645528626411_08a0710bde14a84ceffe97e2c8ae60ee.jpg', 555, 0, '2025-05-01', 'Áo sweater ấm áp, thoải mái cho mùa đông lạnh giá này. Sản phẩm có kiểu dệt frency terry hay còn gọi là da cá giúp mặt phải mềm mịn, đanh chắc, mặt trái là những mắt dệt xếp chồng lên nhau đều đặn. Trên nền vải nỉ chất lượng, chiếc áo này giúp bạn giữ ấm tốt, thoải mái nhờ form rộng và định hình tốt, hạn chế nhăn nhàu/ xù lông', 1, 1),
(6, 'Sơ Mi Cộc Tay Nam Nano Kẻ Caro Túi Ngực', '499.00', '499.00', './uploads/17484253921748368752z6645528543530_8936ddf139fe638b1aca6c503787c380.jpg', 531, 0, '2025-05-01', 'Chất liệu: Jeans cotton co giãn nhẹ\r\nThành phần:100% Polyester', 1, 1),
(11, 'Áo Phông Nam Thể Thao Tay Raglan In Sườn', '249.00', '240.00', './uploads/1748601343314fc5b4327fc5076aa67db5fdf7c002.webp', 0, 0, '2025-05-28', 'Áo phông nam tay raglan với thiết kế thể thao khỏe khoắn, mang đến phong cách năng động và thoải mái. Chất liệu nhẹ, co giãn nhẹ giúp dễ dàng vận động, đồng thời đảm bảo độ thoáng khí, phù hợp cho các hoạt động thể thao hay mặc hàng ngày. Ưu điểm nổi bật là độ bền cao, dễ dàng giặt máy mà không lo biến dạng, giữ form áo lâu dài.', 1, 1),
(12, 'Quần Shorts Nam Thể Thao Cắt Laser In Sườn', '399.00', '399.00', './uploads/17486024611748425777ab0ff8f8b5c286d178c993019c286275.webp', 0, 0, '2025-05-28', 'Chất liệu: Gió co giãn 360\r\nThành phần: 75%Polyamide, 25%Elastane', 1, 1),
(13, 'Quần Thể Thao Nam Cắt Lazer Bo Gấu', '499.00', '249.00', './uploads/17486009661e2a69cbeba67a8c052ea5d0a9ea733d.webp', 3, 0, '2025-05-28', 'Vải gió co giãn tốt, mát mẻ', 1, 1),
(14, 'Quần Thể Thao Nam Chun Gấu Phối Lé', '499.00', '499.00', './uploads/17484259023c7bc9e3f11fd1f5daf63ddf1054b7d4.webp', 333, 0, '2025-05-28', 'Siêu tiện lợi, siêu thoải mái cùng quần thể thao nam YODY. Sản phẩm có thành phần chính là sợi Nylon mang lại cảm giác mềm mại, bền chắc. Vải co giãn bốn chiều nhờ sợi spandex, giúp dễ dàng vận động khi mặc. Kiểu dệt thoi hai hệ sợi vuông góc với nhau taọ kết cấu chắc chắn, tăng độ bền. Dễ chăm sóc, giặt máy thoải mái.', 1, 1),
(15, 'Quần Gió Dài Nam Thể Thao Active Your Way', '449.00', '449.00', './uploads/174842594513477918e39c31c7ce8d688d804d2ca2.webp', 553, 0, '2025-05-28', 'Chất liệu: Co giãn 360 All Season\r\n\r\nThành phần: 75%Polyamide, 25%Elastane', 1, 1),
(16, 'Áo Sơ Mi Dài Tay Nữ Ren Thêu Dáng Rộng', '449.00', '449.00', './uploads/1748426050a112811fef5b4f280f6ce86a81282b10.webp', 555, 0, '2025-05-28', 'Chất liệu: 100% cotton\r\nThành phần: 100% Cotton\r\n\r\nBộ sưu tập Peaceful Summer 2025 - YODY mang đến vẻ đẹp thanh lịch, sự thoải mái và phong cách tinh tế. Với gam màu dịu nhẹ và chất liệu cao cấp, bộ sưu tập gợi lên cảm giác bình yên, tươi mới, như một sự kết nối hài hòa với thiên nhiên.', 2, 1),
(17, 'Áo Phông Thun Rib Họa Tiết', '199.00', '199.00', './uploads/17484261063e279ed4c388b3be16807915f4abfbc0.webp', 663, 0, '2025-06-06', 'Chất liệu: Vải dệt hiệu ứng\r\nThành phần:80% Polyester, 20% Viscose\r\nBộ sưu tập Peaceful Summer 2025 - YODY mang đến vẻ đẹp thanh lịch, sự thoải mái và phong cách tinh tế. Với gam màu dịu nhẹ và chất liệu cao cấp, bộ sưu tập gợi lên cảm giác bình yên, tươi mới, như một sự kết nối hài hòa với thiên nhiên.', 2, 1),
(18, 'Áo Len Polo Dệt Vặn Thừng', '399.00', '399.00', './uploads/17484261614d3ef36520a50db926c66dee498a9b47.webp', 546, 0, '2025-04-30', 'Chất liệu: Len 3 thành phần\r\nThành phần:41,5%Polyester, 29,6%Polyamide, 28,9%Rayon\r\nBộ sưu tập Peaceful Summer 2025 - YODY mang đến vẻ đẹp thanh lịch, sự thoải mái và phong cách tinh tế. Với gam màu dịu nhẹ và chất liệu cao cấp, bộ sưu tập gợi lên cảm giác bình yên, tươi mới, như một sự kết nối hài hòa với thiên nhiên.', 2, 1),
(19, 'Áo Phông Nữ Slimfit Thun Rib Coton Mềm ', '99.00', '99.00', './uploads/17484262468ccfbd5e465a6e3d02fb9f8a7af9912a.webp', 666, 0, '2025-05-28', 'Everyday Basics: SẢN PHẨM TỐT - GIÁ TRẢI NGHIỆM\r\nÁo thun tôn dáng dành riêng cho nàng. Thiết kế cổ tròn, dáng ôm tôn lên đường cong cơ thể giúp nàng trông thon gọn và năng động hơn. Sản phẩm cho cảm giác mặc siêu mềm mại, siêu co giãn, xứng đáng là một item không thể thiếu trong tủ đồ hàng ngày cho các chị em.', 2, 1),
(20, 'Quần Shorts Lơ Vê Nắp Túi', '399.00', '399.00', './uploads/174842632760aba0ffa0fb5b5648c650d40bf1931c.webp', 666, 0, '2025-05-28', 'Chất liệu: Tuýt si\r\nBộ sưu tập Peaceful Summer 2025 - YODY mang đến vẻ đẹp thanh lịch, sự thoải mái và phong cách tinh tế. Với gam màu dịu nhẹ và chất liệu cao cấp, bộ sưu tập gợi lên cảm giác bình yên, tươi mới, như một sự kết nối hài hòa với thiên nhiên.', 2, 1),
(21, 'Quần Shorts Dáng Lửng', '229.00', '229.00', './uploads/17484275462762b98a19387ea905ba8ae8ede73e6c.webp', 761, 0, '2025-06-06', 'Quần short nữ basic với thiết kế đơn giản nhưng không kém phần thời trang, được làm từ 100% sợi Nylon cao cấp, mang lại độ bền vượt trội và khả năng giữ form tuyệt đối. Sản phẩm tôn dáng, tạo nên phong cách cá tính và năng động cho người mặc. Ưu điểm nổi bật là dễ dàng chăm sóc, giặt nhanh khô và không bị biến dạng sau nhiều lần sử dụng, phù hợp cho mọi hoạt động hàng ngày.', 2, 1),
(22, 'Áo Phông Bé Trai Túi Hộp', '169.00', '135.00', './uploads/17484278427d6bed619a4ed5a32dbe777ed38e47d3.webp', 0, 0, '2025-05-28', 'Áo thun bé trai có thiết kế túi hộp Yody là sự lựa chọn lý tưởng cho các bé năng động. Chất liệu Cotton USA an toàn, lành tính, thoáng mát, thấm hút tốt và mềm mại, mang lại sự thoải mái tối đa cho bé. Thiết kế áo phông kiểu dáng rộng rãi, thoải mái với điểm nhấn túi hộp trước ngực cá tính. Sản phẩm phù hợp cho mọi hoạt động, từ đi học, đi chơi đến mặc ở nhà, dễ dàng kết hợp với nhiều kiểu trang phục khác nhau, giúp bé luôn năng động và đáng yêu', 3, 1),
(23, 'Áo Phông Cá Sấu Lớn', '199.00', '159.00', './uploads/17484278907e332c63efe6756f98cc8a359765fb73.webp', 657, 0, '2025-06-06', 'Mùa hè tới, những chiếc áo thun 100% cotton lại in hình xinh xắn là lựa chọn siêu lý tưởng. Sản phẩm này sử dụng chất liệu Cotton Compact từ sợi bông USA cao cấp, thấm hút mồ hôi tốt, thoáng mát và thân thiện với môi trường. Thiết kế form dáng rộng, thoải mái với hình in cá sấu lớn dễ thương, tạo nên phong cách ngộ nghĩnh và đáng yêu. Sản phẩm phù hợp cho mọi hoạt động hàng ngày của bé, từ đi học đến đi chơi, dễ dàng kết hợp với quần dài hoặc quần short.', 3, 1),
(24, 'Áo Khoác Kid Giả Lông Cừu Cổ Cao', '349.00', '279.00', './uploads/1748428055b8720cd7b4a22ca3bedbe54ceb700219.webp', 774, 0, '2025-06-06', 'Áo lông cừu siêu ấm', 3, 1),
(25, 'Áo Khoác Kid Mũ Liền Lót Lông', '399.00', '499.00', './uploads/17484281157dded5aaa1f0053efe062921ab97bc46.webp', 773, 0, '2025-05-03', 'Ấm áp bên ngoài, thoải mái bên trong! Trang bị cho bé chiếc áo khoác siêu tiện dụng này cho mùa đông nhé ba mẹ ơi.\r\nÁo có lớp vải chính 100% Polyester dệt poplin siêu bền chắc.\r\n\r\nLớp màng PU siêu mỏng nhẹ ở giữa giúp CHỐNG THẤM NGƯỢC nước vào trong.\r\n\r\nLớp màng trong cùng được dệt liên kết và gia cố keo trước khi ép tạo độ liên kết tốt hơn, bảo vệ lớp PU ở giữa, tăng độ bền của PU, kéo dài khả năng trượt nước.\r\n\r\nFluoride-free: Vải không sử dụng chất trợ C6, C8 để trượt nước, an toàn với môi trường và người dùng.\r\nThiết kế năng động, khoẻ khoắn, cho con thoải mái chạy nhảy hàng ngày.', 3, 1),
(26, 'ÁO POLO TRẺ EM In Best Friend Forever', '199.00', '99.00', './uploads/17484281658945c9ef7cad01392adb526db77d2755.webp', 887, 0, '2025-05-24', 'Áo polo trẻ em Best Friend Forever từ sợi Cafe tái chế, thân thiện với môi trường. Với cấu trúc lỗ xốp đặc biệt, áo giúp bé luôn khô thoáng, không lo mùi hôi, bảo vệ da khỏi tia UV. Chất liệu mềm mịn, an toàn, thiết kế đáng yêu, phù hợp cho bé yêu vận động cả ngày.', 3, 1),
(27, 'Quần Shorts Bé Gái Cơ Bản Xếp Li', '299.00', '239.00', './uploads/1748428555c9d70ad58c4d91bdb5a7e55a078d0aeb.webp', 663, 0, '2025-05-28', 'Đơn giản nhưng vô cùng thoải mái và tiện lợi dành cho bé. Chiếc quần short với thiết kế cạp linh hoạt giúp bé vừa chỉn chu, chững chạc lại vừa thoải mái, phù hợp với mọi vòng bụng. Quần cho cảm giác mặc mềm, co giãn. Bảng màu nhã nhặn, dễ mặc, dễ phối đồ đi học đi chơi vô cùng năng động.', 3, 1),
(28, 'Quần Dài Âu Nam Khóa Cài Sườn Có Ly', '439.00', '549.00', './uploads/17494660048598110cad33938f107afcbaf68ebb26.webp', 20, 0, '2025-06-09', 'Quần âu dáng siêu đẹp', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tai_khoans`
--

CREATE TABLE `tai_khoans` (
  `id` int NOT NULL,
  `ho_ten` varchar(255) NOT NULL,
  `anh_dai_dien` varchar(255) DEFAULT NULL,
  `ngay_sinh` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `so_dien_thoai` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `gioi_tinh` tinyint(1) NOT NULL DEFAULT '1',
  `dia_chi` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mat_khau` varchar(255) NOT NULL,
  `chuc_vu_id` int NOT NULL,
  `trang_thai` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tai_khoans`
--

INSERT INTO `tai_khoans` (`id`, `ho_ten`, `anh_dai_dien`, `ngay_sinh`, `email`, `so_dien_thoai`, `gioi_tinh`, `dia_chi`, `mat_khau`, `chuc_vu_id`, `trang_thai`) VALUES
(2, 'Nguyen van duy', NULL, '2005-05-28', 'Admin6868@gmail.com', '0355344444', 1, 'fffffffhhhh', '$2y$10$zcaN.JLJFum8DyTXrfDL.OL1vFOiP5aDMjmeSoKRaszsqjKQIjN7a', 1, 1),
(3, 'Nguyen viet anh', NULL, '2003-02-05', 'vietanh@gmail.com', '08999999', 1, 'fffffffhhhh', '$2y$10$ExQzhpeE2M3f/FEjvcbSP.WcTUdbgAebs97as0Svc5KfWw.7iTUPm', 2, 1),
(4, 'Nguyen van duy', NULL, '1999-06-29', 'duy@gmail.com', '011111111', 1, 'fffffff', '$2y$10$dfrEacStBbJlaN/JuabFPODAYxG57gTUxD2qZFZTXzM1fRbeaEIe.', 2, 1),
(5, 'anh', NULL, '2000-10-10', 'quangnamclient@gmail.com', '0823736192', 1, 'Hanoi', '$2y$10$9bWnBH2eQuUhIvMkD57oY.ox74d3IoeBnnIUZZZFr7nQyhkNe1lA2', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `trang_thai_don_hangs`
--

CREATE TABLE `trang_thai_don_hangs` (
  `id` int NOT NULL,
  `ten_trang_thai` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `trang_thai_don_hangs`
--

INSERT INTO `trang_thai_don_hangs` (`id`, `ten_trang_thai`) VALUES
(1, 'Chưa xác nhận'),
(2, 'Đã xác nhận'),
(3, 'Đang chuẩn bị hàng'),
(4, 'Đang giao'),
(5, 'Đã giao\r\n'),
(6, 'Đã nhận\r\n'),
(7, 'Thành công'),
(8, 'Hoàn hàng'),
(9, 'Hủy đơn');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chi_tiet_don_hangs`
--
ALTER TABLE `chi_tiet_don_hangs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chi_tiet_gio_hangs`
--
ALTER TABLE `chi_tiet_gio_hangs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chuc_vus`
--
ALTER TABLE `chuc_vus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `danh_mucs`
--
ALTER TABLE `danh_mucs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `don_hangs`
--
ALTER TABLE `don_hangs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gio_hangs`
--
ALTER TABLE `gio_hangs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hinh_anh_san_phams`
--
ALTER TABLE `hinh_anh_san_phams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phuong_thuc_thanh_toans`
--
ALTER TABLE `phuong_thuc_thanh_toans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `san_phams`
--
ALTER TABLE `san_phams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tai_khoans`
--
ALTER TABLE `tai_khoans`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `trang_thai_don_hangs`
--
ALTER TABLE `trang_thai_don_hangs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chi_tiet_don_hangs`
--
ALTER TABLE `chi_tiet_don_hangs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `chi_tiet_gio_hangs`
--
ALTER TABLE `chi_tiet_gio_hangs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `chuc_vus`
--
ALTER TABLE `chuc_vus`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `danh_mucs`
--
ALTER TABLE `danh_mucs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `don_hangs`
--
ALTER TABLE `don_hangs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `gio_hangs`
--
ALTER TABLE `gio_hangs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `hinh_anh_san_phams`
--
ALTER TABLE `hinh_anh_san_phams`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `phuong_thuc_thanh_toans`
--
ALTER TABLE `phuong_thuc_thanh_toans`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `san_phams`
--
ALTER TABLE `san_phams`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `tai_khoans`
--
ALTER TABLE `tai_khoans`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `trang_thai_don_hangs`
-c
ALTER TABLE `trang_thai_don_hangs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
