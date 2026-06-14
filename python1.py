from flask import Flask, render_template, session, redirect, request
from werkzeug.security import generate_password_hash, check_password_hash
import psycopg2
import os
from dotenv import load_dotenv

start1 = Flask(__name__)
start1.secret_key = "123456"

load_dotenv("connect1.env")

connect1 = psycopg2.connect(host = os.getenv("host1"),
                            database = os.getenv("database1"),
                            user = os.getenv("user1"),
                            password = os.getenv("password1"),
                            port = os.getenv("port1")
                            )

execute1 = connect1.cursor()

execute1.execute("""CREATE TABLE IF NOT EXISTS everything2(
        id1 SERIAL PRIMARY KEY,
        username1 TEXT UNIQUE,
        password1 TEXT
        )""")

@start1.route("/", methods = ["POST", "GET"])
def first1():
    if request.method == "POST":
        input1 = request.form["input1"]
        pass1 = request.form["pass1"]
        execute1.execute("SELECT password1 FROM everything2 WHERE username1 = %s", (input1,))
        checkinp1 = execute1.fetchone()
        # if "name" in session and input1 == session["name"]:
        if checkinp1 and check_password_hash(checkinp1[0], pass1):
            session["name"] = input1
            return redirect("/wish")
        else:
            pass
    return render_template("html2.html")

@start1.route("/singup", methods = ["POST", "GET"])
def second2():
    if request.method == "POST":
        input2 = request.form["input2"]
        pass2 = request.form["pass2"]
        if len(input2.strip()) >= 4 and len(pass2.strip()) >= 4:
            # session["name"] = input2
            execute1.execute("SELECT 1 FROM everything2 WHERE username1 = %s", (input2,))
            get1 = execute1.fetchone()
            if get1:
                return render_template("/html3.html", duplicates = "this username already exists")
            else:
                protectinp2 = generate_password_hash(pass2)

                execute1.execute("INSERT INTO everything2 (username1, password1) VALUES (%s, %s)", (input2, protectinp2,))

                connect1.commit()
                return redirect("/login2")
        elif len(input2.strip()) <= 3 or len(pass2.strip()) <= 3:
            return render_template("html3.html", fill1 = "to singup you need to have more than 4 char in both inputs")       
        else: 
            pass
    return render_template("html3.html")

@start1.route("/login2", methods = ["POST", "GET"])
def fourth4():
    if request.method == "POST":
        input1 = request.form["input1"]
        pass1 = request.form["pass1"]
        execute1.execute("SELECT password1 FROM everything2 WHERE username1 = %s", (input1,))
        checkinp1 = execute1.fetchone()
        if checkinp1 and check_password_hash(checkinp1[0], pass1):
            session["name"] = input1
            return redirect("/wish")
        else:
            pass
    return render_template("/html4.html")

@start1.route("/wish")
def third3():
    if "name" in session:
        return render_template("html1.html")
    else: 
        return redirect("/")

start1.run(debug=True)

connect1.close()
