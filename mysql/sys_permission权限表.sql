
-- ----------------------------
-- Table structure for sys_permission
-- ----------------------------
DROP TABLE IF EXISTS `sys_permission`;
CREATE TABLE `sys_permission`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `permission_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限ID（自定义）可设置唯一索引UNIQUE',
  `permission_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限名称',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '描述说明',
  `create_user` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '修改人',
  `update_time` datetime NULL DEFAULT NULL COMMENT '修改时间',
  `is_deleted` tinyint UNSIGNED NULL DEFAULT 0 COMMENT '是否删除（0：正常/1：删除）',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '权限表' ROW_FORMAT = Dynamic;
 
-- ----------------------------
-- Records of sys_permission
-- ----------------------------
INSERT INTO `sys_permission` VALUES (1, '10001', '系统管理', '菜单权限（一级菜单）', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (2, '10002', '权限管理', '菜单权限（二级菜单）', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (3, '10003', '角色管理', '菜单权限（二级菜单）', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (4, '10004', '用户管理', '菜单权限（二级菜单）', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (5, '00001', '超级管理员', '当用户角色拥有该权限时，可分配sys_role表中权限ID为该值的角色给用户', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (6, '50001', '组长管理员', '组长角色拥有该权限时，可分配测试员的角色给用户', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (7, '60001', '查询权限列表', '接口权限', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (8, '60002', '新增权限', '接口权限', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (9, '60003', '修改权限', '接口权限', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (10, '60004', '删除权限', '接口权限', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (11, '60005', '查询角色列表', '接口权限', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (12, '60006', '新增角色', '接口权限', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (13, '60007', '修改角色', '接口权限', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (14, '60008', '删除角色', '接口权限', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (15, '60009', '查询用户列表', '接口权限', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (16, '60010', '新增用户', '接口权限', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (17, '60011', '修改用户', '接口权限', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);
INSERT INTO `sys_permission` VALUES (18, '60012', '删除用户', '接口权限', '88888888', '2021-03-23 15:11:42', NULL, NULL, 0);