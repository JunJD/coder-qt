-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `menu_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '菜单名称',
  `permission_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限ID',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '请求路径',
  `sort` tinyint NULL DEFAULT NULL COMMENT '排序',
  `style` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '样式（可设置css图标）',
  `parent_id` int NULL DEFAULT NULL COMMENT '父主键ID（有值的，属于该值菜单的下级菜单）',
  `create_user` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '修改人',
  `update_time` datetime NULL DEFAULT NULL COMMENT '修改时间',
  `is_deleted` tinyint UNSIGNED NULL DEFAULT 0 COMMENT '是否删除（0：正常/1：删除）',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '菜单表' ROW_FORMAT = Dynamic;
 
-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (1, '系统管理', '10001', NULL, 1, NULL, NULL, '88888888', '2021-03-23 15:09:11', NULL, NULL, 0);
INSERT INTO `sys_menu` VALUES (2, '权限管理', '10002', '/sys/permission', 2, NULL, 1, '88888888', '2021-03-23 15:09:11', NULL, NULL, 0);
INSERT INTO `sys_menu` VALUES (3, '角色管理', '10003', '/sys/role', 3, NULL, 1, '88888888', '2021-03-23 15:09:11', NULL, NULL, 0);
INSERT INTO `sys_menu` VALUES (4, '用户管理', '10004', '/sys/user', 4, NULL, 1, '88888888', '2021-03-23 15:09:11', NULL, NULL, 0);