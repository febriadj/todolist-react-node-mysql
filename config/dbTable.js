const todolist = () => new Promise((resolve, reject) => {
  resolve(`CREATE TABLE IF NOT EXISTS todolist (
    id INT PRIMARY KEY AUTO_INCREMENT,
    activity VARCHAR(225) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  )`)
})

module.exports = todolist