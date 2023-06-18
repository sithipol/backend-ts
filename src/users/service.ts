import { User } from "./user";
import connection from "../../config/db.config";
export class UserService {
  getUsers(): Promise<User[]> {
    let query: string = "SELECT * FROM users";
    return new Promise<User[]>((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  getUser(id: string): Promise<User[]> | undefined {
    let query: string = `SELECT * FROM users WHERE id = (?)`;
    return new Promise<User[]>((resolve, reject) => {
      connection.query(query, [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  createUser(userData: User): Promise<User> {
    let query: string = `INSERT INTO users SET ? `;
    return new Promise<User>((resolve, reject) => {
      connection.query(query, [userData], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  updateUser(userData: User, id: string): Promise<any[]> {
    let query: string = `UPDATE users SET ? WHERE id =? `;
    return new Promise((resolve, reject) => {
      connection.query(query, [userData, id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  deleteUser(id: string): Promise<User> {
    let query: string = `DELETE FROM users WHERE id = ? `;
    return new Promise<User>((resolve, reject) => {
      connection.query(query, [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}
