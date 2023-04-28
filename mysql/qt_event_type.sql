CREATE TABLE IF NOT EXISTS event_types (
  id INT PRIMARY KEY AUTO_INCREMENT,
  event_type_id VARCHAR(255) UNIQUE NOT NULL,
  event_type_name VARCHAR(100),
  event_theme_color VARCHAR(100),
  create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);