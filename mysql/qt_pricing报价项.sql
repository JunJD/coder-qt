-- ----------------------------
-- Table structure for qt_pricing_items
-- ----------------------------
DROP TABLE IF EXISTS `qt_pricing_items`;
CREATE TABLE `qt_pricing_items`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `pricing_item_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '报价项ID（自定义）可设置唯一索引UNIQUE',
  `pricing_item_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '报价项名称',
  `pricing_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '报价类ID（自定义）可设置唯一索引UNIQUE',
  `create_user` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '修改人',
  `update_time` datetime NULL DEFAULT NULL COMMENT '修改时间',
  `is_deleted` tinyint(1) NULL DEFAULT 0 COMMENT '是否删除（0：正常/1：删除）',
  
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色表' ROW_FORMAT = Dynamic;
 
-- ----------------------------
-- Records of qt_pricing_items
-- ----------------------------
INSERT INTO `qt_pricing_items` VALUES (1, '1asadsda', '位移动画', 'ashas', '88888888', '2021-03-23 15:18:10', NULL, NULL, 0);
INSERT INTO `qt_pricing_items` VALUES (2, 'asdasfdc', '透明度动画','ashas', '88888888', '2021-03-23 15:18:10', NULL, NULL, 0);
INSERT INTO `qt_pricing_items` VALUES (3, '123wsadsa', '复杂插画', '89129ahjsn', '88888888', '2021-03-23 15:18:10', NULL, NULL, 0);