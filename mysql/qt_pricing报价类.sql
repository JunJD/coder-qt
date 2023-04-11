-- ----------------------------
-- Table structure for qt_pricing
-- ----------------------------
DROP TABLE IF EXISTS `qt_pricing`;
CREATE TABLE `qt_pricing`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `pricing_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '报价类ID（自定义）可设置唯一索引UNIQUE',
  `pricing_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '报价类名称',
  `create_user` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '修改人',
  `update_time` datetime NULL DEFAULT NULL COMMENT '修改时间',
  `is_deleted` tinyint(1) NULL DEFAULT 0 COMMENT '是否删除（0：正常/1：删除）',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色表' ROW_FORMAT = Dynamic;
 
-- ----------------------------
-- Records of qt_pricing
-- ----------------------------
INSERT INTO `qt_pricing` VALUES (1, 'ashas', 'SVG动画', '88888888', '2021-03-23 15:18:10', NULL, NULL, 0);
INSERT INTO `qt_pricing` VALUES (2, '89129ahjsn', '平面设计', '88888888', '2021-03-23 15:18:10', NULL, NULL, 0);
INSERT INTO `qt_pricing` VALUES (3, 'ask871j', '创意动画', '88888888', '2021-03-23 15:18:10', NULL, NULL, 0);