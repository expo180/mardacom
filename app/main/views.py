from datetime import datetime
from flask import render_template, session, redirect, url_for
from . import main

@main.route('/')
def home():
	return render_template('home.html')  