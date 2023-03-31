
-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户ID',
  `role_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色ID',
  `create_user` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '修改人',
  `update_time` datetime NULL DEFAULT NULL COMMENT '修改时间',
  `is_deleted` tinyint(1) NULL DEFAULT 0 COMMENT '是否删除（0：正常/1：删除）',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户角色关联表' ROW_FORMAT = Dynamic;
 
-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
INSERT INTO `sys_user_role` VALUES (1, '88888888', '888888', '88888888', '2021-03-23 15:54:17', NULL, NULL, 0);
INSERT INTO `sys_user_role` VALUES (2, '88888888', '100001', '88888888', '2021-03-23 15:54:17', NULL, NULL, 0);
INSERT INTO `sys_user_role` VALUES (3, '88888888', '100002', '88888888', '2021-03-23 15:54:17', NULL, NULL, 0);
INSERT INTO `sys_user_role` VALUES (4, '80000001', '100001', '88888888', '2021-03-23 15:54:17', NULL, NULL, 0);
INSERT INTO `sys_user_role` VALUES (5, '80000001', '100002', '88888888', '2021-03-23 15:54:17', NULL, NULL, 0);
INSERT INTO `sys_user_role` VALUES (6, '80000002', '100002', '88888888', '2021-03-23 15:54:17', NULL, NULL, 0);
INSERT INTO `sys_user_role` VALUES (7, '80000003', '100002', '88888888', '2021-03-23 15:54:17', NULL, NULL, 0);