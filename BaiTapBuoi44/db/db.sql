-- 1.
CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    name TEXT,
    age INT,
    address TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    created_by INT,
    modified_at TIMESTAMPTZ,
    modified_by INT,
    deleted_at TIMESTAMPTZ,
    deleted_by INT,
    active BOOLEAN DEFAULT TRUE
);
-- 2.
INSERT INTO
    customer (
        name,
        age,
        address,
        created_by,
        active
    )
VALUES (
        'Nguyen Van A',
        22,
        'Da Nang',
        1,
        TRUE
    ),
    (
        'Tran Thi B',
        25,
        'Quang Nam',
        1,
        TRUE
    ),
    (
        'Le Van C',
        30,
        'Ha Noi',
        1,
        TRUE
    ),
    (
        'Pham Thi D',
        35,
        'Ho Chi Minh',
        1,
        FALSE
    ),
    (
        'Hoang Van E',
        28,
        'Hue',
        1,
        TRUE
    ),
    (
        'Vo Thi F',
        40,
        'Can Tho',
        1,
        TRUE
    ),
    (
        'Dang Van G',
        19,
        'Da Nang',
        1,
        TRUE
    ),
    (
        'Bui Thi H',
        45,
        'Hai Phong',
        1,
        FALSE
    ),
    (
        'Nguyen Van I',
        32,
        'Nha Trang',
        1,
        TRUE
    ),
    (
        'Tran Thi K',
        27,
        'Da Lat',
        1,
        TRUE
    ),
    (
        'Le Van L',
        50,
        'Vung Tau',
        1,
        FALSE
    ),
    (
        'Pham Thi M',
        23,
        'Quang Ngai',
        1,
        TRUE
    ),
    (
        'Hoang Van N',
        38,
        'Binh Duong',
        1,
        TRUE
    ),
    (
        'Vo Thi P',
        29,
        'Dong Nai',
        1,
        TRUE
    ),
    (
        'Dang Van Q',
        60,
        'Ha Noi',
        1,
        FALSE
    );

SELECT * FROM customer;

SELECT COUNT(*) FROM customer;

-- 3.

SELECT * FROM customer WHERE active = TRUE;

SELECT * FROM customer WHERE age > 30;

SELECT * FROM customer WHERE address = 'Ha Noi';

SELECT * FROM customer WHERE name LIKE '%An%';

-- 4.
ALTER TABLE customer
ADD COLUMN email TEXT,
ADD COLUMN phone VARCHAR(20),
ADD COLUMN gender VARCHAR(10);

UPDATE customer
SET
    email = 'a@gmail.com',
    phone = '0905000001',
    gender = 'Male'
WHERE
    id = 1;

UPDATE customer
SET
    email = 'b@gmail.com',
    phone = '0905000002',
    gender = 'Female'
WHERE
    id = 2;

UPDATE customer
SET
    email = 'c@gmail.com',
    phone = '0905000003',
    gender = 'Male'
WHERE
    id = 3;
-- 5.
UPDATE customer SET name = 'Tran Thi An Binh' WHERE id = 2;

UPDATE customer
SET
    email = 'hoangvane@gmail.com',
    phone = '0905123456',
    modified_at = NOW(),
    modified_by = 1
WHERE
    id = 5;

UPDATE customer
SET
    age = 31,
    modified_at = NOW(),
    modified_by = 2
WHERE
    id = 3;

UPDATE customer
SET
    age = 35,
    modified_at = NOW(),
    modified_by = 2
WHERE
    id = 14;