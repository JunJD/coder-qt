-- ----------------------------
-- Table structure for sys_role_permission
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_permission`;
CREATE TABLE `sys_role_permission`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `role_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色ID',
  `permission_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限ID',
  `create_user` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '修改人',
  `update_time` datetime NULL DEFAULT NULL COMMENT '修改时间',
  `is_deleted` tinyint(1) NULL DEFAULT 0 COMMENT '是否删除（0：正常/1：删除）',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色权限关联表' ROW_FORMAT = Dynamic;
 
-- ----------------------------
-- Records of sys_role_permission
-- ----------------------------
INSERT INTO `sys_role_permission` VALUES (1, '888888', '10001', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (2, '888888', '10002', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (3, '888888', '10003', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (4, '888888', '10004', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (5, '888888', '00001', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (6, '888888', '50001', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (7, '888888', '60001', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (8, '888888', '60002', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (9, '888888', '60003', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (10, '888888', '60004', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (11, '888888', '60005', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (12, '888888', '60006', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (13, '888888', '60007', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (14, '888888', '60008', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (15, '888888', '60009', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (16, '888888', '60010', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (17, '888888', '60011', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (18, '888888', '60012', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (19, '100001', '10001', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (20, '100001', '10004', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (21, '100001', '60009', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (22, '100001', '60010', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (23, '100001', '60011', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);
INSERT INTO `sys_role_permission` VALUES (24, '100001', '60012', '88888888', '2021-03-23 15:29:09', NULL, NULL, 0);