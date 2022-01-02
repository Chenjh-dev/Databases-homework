# 创建数据库
CREATE DATABASE sql_test5;

# 使用数据库
USE sql_test5;

# ----------------------------------建表---------------------------------------------------

# 创建客户表
CREATE TABLE Customer(
	id INT COMMENT "账号",
	last_name VARCHAR(15) NOT NULL COMMENT "姓",
	first_Name VARCHAR(15) NOT NULL COMMENT "名",
	address VARCHAR(25) NOT NULL COMMENT "地址" ,
	city VARCHAR(25) NOT NULL COMMENT "城市" ,
	state VARCHAR(10) NOT NULL COMMENT "国家" ,
	zip INT NOT NULL COMMENT "邮政编码" ,
	phone VARCHAR(25) NOT NULL COMMENT "电话号码" ,
	email_Address VARCHAR(25) NOT NULL COMMENT "邮箱地址" ,
	credit_Card_Details DOUBLE COMMENT "信用卡余额" ,
	birth_Date DATE COMMENT "出生日期" ,
	exercise_History VARCHAR(15) COMMENT "健身频率" ,
	fitness_Level VARCHAR(25) COMMENT "肥胖程度" ,
	medical_Heath VARCHAR(25) COMMENT "健康水平",
	PRIMARY KEY(id)
)COMMENT "客户表";

# 创建教练表
CREATE TABLE Personal_Trainer(
	id INT COMMENT "账号" ,
	last_Name VARCHAR(15) NOT NULL COMMENT "姓" ,
	first_Name VARCHAR(15) NOT NULL COMMENT "名" ,
	address VARCHAR(25) NOT NULL COMMENT "地址" ,
	city VARCHAR(25) NOT NULL COMMENT "城市" ,
	state VARCHAR(10) NOT NULL COMMENT "国家" ,
	zip INT NOT NULL COMMENT "邮政编码" ,
	phone VARCHAR(25) NOT NULL COMMENT "电话号码" ,
	email VARCHAR(25) NOT NULL COMMENT "邮箱地址" ,
	PRIMARY KEY(id)
) COMMENT "教练表";

# 创建级别表
CREATE TABLE Level_Information(
	id INT COMMENT "级别编号" ,
	level_Name VARCHAR(10) NOT NULL COMMENT "级别编号含义" ,
	price_Per_Month DOUBLE NOT NULL  COMMENT "每月费用" ,
	PRIMARY KEY(id)
) COMMENT "级别表" ;


# 创建事务表
CREATE TABLE Record_Transaction (
	customer_ID INT NOT NULL COMMENT "客户账号" ,
	pt_ID INT NOT NULL COMMENT "教练账号" ,
	level_ID INT NOT NULL COMMENT "级别账号" ,
	PRIMARY KEY(customer_ID) ,
	FOREIGN KEY(customer_ID) REFERENCES Customer(id),
	FOREIGN KEY(pt_ID) REFERENCES Personal_Trainer(id),
	FOREIGN KEY(level_ID) REFERENCES Level_Information(id)
) COMMENT "事务表" ;


# 创建记录删除未成年客户表
CREATE TABLE Delete_Young_Members(
	last_name VARCHAR(15) NOT NULL COMMENT "姓",
	first_Name VARCHAR(15) NOT NULL COMMENT "名",
	address VARCHAR(25) NOT NULL COMMENT "地址" ,
	city VARCHAR(25) NOT NULL COMMENT "城市" ,
	state VARCHAR(10) NOT NULL COMMENT "国家" ,
	zip INT NOT NULL COMMENT "邮政编码" ,
	phone VARCHAR(25) NOT NULL COMMENT "电话号码" ,
	email_Address VARCHAR(25) NOT NULL COMMENT "邮箱地址" ,
	credit_Card_Details DOUBLE COMMENT "信用卡余额" ,
	birth_Date DATE COMMENT "出生日期" ,
	exercise_History VARCHAR(15) COMMENT "健身频率" ,
	fitness_Level VARCHAR(25) COMMENT "肥胖程度" ,
	medical_Heath VARCHAR(25) COMMENT "健康水平",
	PRIMARY KEY(last_Name,first_Name)
)COMMENT "删除未成年客户表" ;


# -----------------------------------------插入表数据-----------------------------------------------

# 插入客户表
INSERT IGNORE INTO customer VALUES
	(101,'Dickerson','Allen','138 Woodlawn Ave','Seattle','WA',98119,'(206)256-0097','AED@zoom.net',4536,'1986-4-10','Frequent','Very Fit','Very Healthy'),
	(102,'Faber','Dale','121 Chaucer Lane','Bronx','NY',10463,'(212)549-3324','Oldie@brandywine.net',7624,'1958-7-12','Moderate','Moderately Fit','Somewhat Healthy'),
	(103,'Hearn','Arthur','26 Julie Court','Media','PA',19063,'(610)543-7611','Ahearn@aol.com',1196,'1975-8-15','Frequent','Unfit','Somewhat Healthy'),
	(104,'Lavelle','Shirley','4001 Birch Street','Peekskill','NY',10566,'(914)736-5512','Shir1121@hotmail.com',3746,'1960-9-25','Frequent','Very Fit','Somewhat Healthy'),
	(105,'Nelson','Janice','23 Geneva Blvd','Piscataway','NJ',08854,'(210)469-3541','NelsJ@hotmail.com',2984,'1948-12-25','None','Unfit','Unhealthy'),
	(106,'Schwartz','Byron','2 Wavely Rd','Deep River','CT',09776,'(203)536-0954','BS599@aol.com',0912,'1989-2-2','Frequent','Moderately Fit','Very Healthy'),
	(107,'Sunzar','Sam','103 Chadd Rd','Owing Mills','MD',21117,'(301)762-1298','55SS@zoom.net',7864,'1975-3-16','Moderate','Unfit','Unhealthy'),
	(108,'Turner','Cynthia','1502 Valley Stream Lane','Salt Lake City','UT',84109,'(801)675-9812','CT@brandywine.net',3562,'1992-5-6','Frequent','Very Fit','Somewhat Healthy'),
	(109,'Trapp','John','220 E Main Street','Scotch Plain','NJ',07076,'(201)757-8876','Trapp334@hotmail.com',8475,'1967-11-26','Moderate','Moderately Fit','Very Healthy'),
	(110,'Wills','Billy','25 Brown Lane','Centerville','OH',45459,'(513)435-9123','BillyW@aol.com',0911,'1951-7-1','None','Moderately Fit','Somewhat Healthy'),

	(111,'Dora','Ingrid','2632 Larry Street','Milwaukee','WI',53216,'414-573-8473','ekfevwiorr@iubridge.com',1234,'1982-1-24','Frequent','Unfit','Very Healthy'),
	(112,'Tyler','Harold','738 Kildeer Drive','SOUTHERN PINES','NC',28387,'754-422-9983','kdkqsofjzm@iubridge.com',1234,'2003-6-20','Moderate','Moderately Fit','Somewhat Healthy'),
	(113,'Zangwill','Channing','1151 Metz Lane','San Diego','CA',92123,'619-366-5357','ugtjbksmgu@iubridge.com',1234,'1979-2-13','None','Very Fit','Very Healthy'),
	(114,'Woolley','Noah','1756 Larry Street','Milwaukee','WI',53213,'414-788-9419','exugzcfcvi@iubridge.com',1234,'1997-4-6','Moderate','Moderately Fit','Somewhat Healthy'),
	(115,'Meredith','Larkin','8704 Bayberry Place','Plantation','KY',40242,'157-809-1557','eefirncrpi@iubridge.com',1234,'1964-10-19','Frequent','Very Fit','Unhealthy'),
	(116,'Birrell','Drew','1126 Vernon Street','Mira Loma','CA',91752,'760-701-4441','xfjdbuscvc@iubridge.com',1234,'2004-9-9','None','Moderately Fit','Somewhat Healthy'),
	(117,'Rhys','Jo','4724 Center Avenue','Fresno','CA',93710,'209-909-5301','gxboyupfps@iubridge.com',1234,'1989-1-15','Moderate','Very Fit','Very Healthy'),
	(118,'Mark','Jack','3422 Elmwood Avenue','Mesa','AZ',85201,'602-803-5342','lhuccwpgdz@iubridge.com',1234,'1968-2-17','None','Unfit','Somewhat Healthy'),
	(119,'Dickens','Bevis','4470 Poplar Avenue','San Diego','CA',92105,'619-640-9520','ebfingapgs@iubridge.com',1234,'1982-1-19','Moderate','Moderately Fit','Unhealthy'),
	(120,'Warner','Michelle','177 Buffalo Creek Road','Nashville','TN',37214,'615-830-6356','wisqyqzdgc@iubridge.com',1234,'1966-1-28','Frequent','Very Fit','Somewhat Healthy');


# 插入教练表
INSERT IGNORE INTO Personal_trainer VALUES
	(1001,"Gonzalez","Diego","59 N. Main Street","Los Angeles","CA",90001,"601-998-0091","diego@owo.com"),
	(1002,"McCall","Patti","6001-G Cumberland Ln","Los Angeles","CA",90002,"540-887-0912","patti@owo.com"),
	(1003,"Kim","Jon","89 Oceanview Rd","Los Angeles","CA",9004,"901-224-7656","jon@owo.com"),

	(1004,'Betsy','Modesty','1356 Briercliff Road','New York','NY',10014,'718-683-6809','gvsopbvdkf@iubridge.com'),
	(1005,'Benson','Kama','1843 Chicago Avenue','Fresno','CA',93721,'209-909-1270','egjqhajutv@iubridge.com');


# 插入级别表
INSERT IGNORE INTO Level_Information VALUES
	(1,"Gold",30.00),
	(2,"Silver",20.00),
	(3,"Bronze",18.50);

# 插入事务表
INSERT IGNORE INTO Record_Transaction VALUES
	(101,1001,1),
	(102,1002,1),
	(103,1003,2),
	(104,1003,3),
	(105,1003,2),
	(106,1001,1),
	(107,1001,1),
	(108,1003,3),
	(109,1002,3),
	(110,1003,2),

	(111,1005,1),
	(112,1002,1),
	(113,1005,2),
	(114,1004,3),
	(115,1003,2),
	(116,1005,3),
	(117,1004,1),
	(118,1001,3),
	(119,1005,3),
	(120,1003,2);


# ----------------------------------------存储过程-------------------------------------------------


# 返回客户表中所有年龄大于等于输入数的记录
DELIMITER //
CREATE PROCEDURE Over_an_Age(IN min_age INT)
	SELECT * FROM Customer WHERE (SELECT TIMESTAMPDIFF(YEAR,birth_Date, NOW())) > min_age  ;
//
DELIMITER ;


# 使用procedure
CALL Over_an_Age(5);


# 显示客户ID，姓，名，和电子邮件地址。只列出非常健康或一般健康且已加入黄金计划的客户
DELIMITER //
CREATE PROCEDURE Fit_and_Gold()
	BEGIN
		SELECT c.id customer_ID, c.last_Name , c.first_Name , c.Email_Address
		FROM customer c , Record_Transaction rt
		WHERE ( c.medical_Heath="Very Healthy" OR c.medical_Heath="Somewhat Healthy" )
				AND c.id = rt.customer_ID AND rt.level_ID=1 ;
	END //
DELIMITER ;


# 将每个私人教练的所有客户加起来。显示私人教练的姓和名以及客户的数量。
DELIMITER //
CREATE PROCEDURE Clients_per_Trainer()
	BEGIN
			SELECT p.last_Name,p.first_Name,
					(SELECT COUNT(r.customer_ID) FROM Record_Transaction r WHERE p.id=r.pt_ID ) number_Of_Clients
			FROM Personal_Trainer p ;
	END //
DELIMITER ;

CALL Clients_per_Trainer();


# 为18岁以下的任何客户删除任何记录
DELIMITER //
CREATE PROCEDURE Delete_Young_Members()
	BEGIN
		WHILE (SELECT COUNT(c.id) FROM Customer c WHERE (SELECT TIMESTAMPDIFF(YEAR,c.birth_Date, NOW())) < 18 ) >0 DO
				INSERT INTO Delete_Young_Members
					(SELECT last_name,first_Name,address,city,state,zip,phone,email_Address,credit_Card_Details,birth_Date,exercise_History,fitness_Level,medical_Heath
		 		FROM Customer WHERE (SELECT TIMESTAMPDIFF(YEAR,birth_Date, NOW())) < 18 LIMIT 1);
				DELETE FROM Customer WHERE TIMESTAMPDIFF(YEAR,birth_Date, NOW()) < 18  LIMIT 1;
		END WHILE;
	END //
DELIMITER ;


# 显示私人教练的姓和名、客户的姓和名、级别和每月价格的标题。
# 1. 首先为报告的输入创建一个查询。2. 将报告分组到私人教练的姓氏上。3. 对价格字段求和。4. 列出培训师每月带来的收入。
DELIMITER //
CREATE PROCEDURE Monthly_Money_Brought_In_by_Trainer()
		BEGIN
			SELECT p.last_Name pt_last_Name,p.first_Name pt_first_Name,c.last_Name c_last_Name,c.first_Name c_first_Name,l.level_Name,l.price_Per_Month
			FROM Personal_trainer p , Customer c , Record_Transaction r , Level_information l
			WHERE p.id=r.pt_ID AND c.id=r.customer_ID AND l.id=r.level_ID
			ORDER BY p.last_Name,p.first_Name,c.last_Name,c.first_Name;

			SELECT p.last_Name pt_last_Name,p.first_Name pt_first_Name,SUM(l.price_Per_Month) total
			FROM Personal_trainer p , Customer c , Record_Transaction r , Level_information l
			WHERE p.id=r.pt_ID AND c.id=r.customer_ID AND l.id=r.level_ID
			GROUP BY p.last_Name,p.first_Name
			ORDER BY p.last_Name,p.first_Name;

			SELECT SUM(l.price_Per_Month) total
			FROM Personal_trainer p , Customer c , Record_Transaction r , Level_information l
			WHERE p.id=r.pt_ID AND c.id=r.customer_ID AND l.id=r.level_ID;
		END //
DELIMITER ;


# 显示删除的未成年人
DELIMITER //
CREATE PROCEDURE showYoung()
	SELECT * FROM delete_young_members; //
DELIMITER ;


# 根据id删除客户
DELIMITER //
CREATE PROCEDURE deleteCustomer(IN _id INT)
DELETE FROM Customer WHERE id=_id; //
DELIMITER ;


# 根据id删除教练
DELIMITER //
CREATE PROCEDURE deletePT(IN _id INT)
DELETE FROM Personal_Trainer WHERE id=_id; //
DELIMITER ;


# ---------------------------------------触发器------------------------------------------------------

# 处理与被删除客户相关的培训记录
DELIMITER //
CREATE TRIGGER delete_Young BEFORE DELETE ON Customer FOR EACH ROW
	BEGIN
			DELETE FROM Record_Transaction WHERE customer_ID=Old.id ;
	END //
DELIMITER ;


# 处理与被删除教练相关的培训记录
DELIMITER //
CREATE TRIGGER delete_PT BEFORE DELETE ON Personal_Trainer FOR EACH ROW
	BEGIN
DELETE FROM Record_Transaction WHERE pt_ID=Old.id ;
END //
DELIMITER ;



# --------------------------------------sql语句-----------------------------------------------------

mybatis语句

"UPDATE Customer c " +
"SET " +
"c.last_Name=#{last_Name}," +
"c.first_Name=#{first_Name}," +
"c.address=#{address}," +
"c.city=#{city}," +
"c.state=#{state}," +
"c.zip=#{zip}," +
"c.phone=#{phone}," +
"c.email_Address=#{email_Address}," +
"c.credit_Card_Details=#{credit_Card_Details}," +
"c.birth_Date=#{birth_Date}," +
"c.exercise_History=#{exercise_History}," +
"c.fitness_Level=#{fitness_Level}," +
"c.medical_Heath=#{medical_Heath}  " +
"WHERE c.id = #{id}  "










