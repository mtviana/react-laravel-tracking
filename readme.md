<h1><a id="Tasks_Tracking_web_app_0"></a>Tasks Tracking web app</h1>
<p>The backend was built using the Laravel framework and the front using React.js. The communication between the two are being made with an api. The database by default is set to sqlite to facilitate the reproduction.</p>
<p>In this app, the user can start a tracker, pause, reset, edit the time and also add some description to specify the tasks he is working on. The user also has a list of all his previous completed tasks and a filter which he can use to easily access a certain task. He can filter using a range between a starting date, ending date, both or description.<br>
I took around four and a half hours to build it, since I had to look up some things in react, the laravel part was very straight forward, didn’t have trouble with It.</p>
<p>If I had more time I certainly would improve the style, solve a few things in the user interaction, like toggling the start button between resume and start to show the user that the chronometer is paused or not, better handle the errors that may occur instead of just logging them.<br>
In the code aspect I would implement PropTypes to protect the components, have a closer look to the components lifecycle implementing componentWillMount, shouldComponentUpdate and so on.</p>
<p>The parts that I think are fine are the filters, I believe they are working well, the one thing I would do would be implement a minimum string length (this part I just forgot) to the search description field to at least 3 characters. And I would also format the date time in the Sql query to a nicer format.</p>
<h3><a id="Installation_14"></a>Installation</h3>
<p>After cloning the repository we need to initialise the composer packages run:</p>
<pre><code class="language-sh">$ composer install
</code></pre>
<p>Next we need do install the node dependencies:</p>
<pre><code class="language-sh">$ npm install
</code></pre>
<p>Next we migrate the database (the database is set to sqlite, the file is in database/database.sqlite):</p>
<pre><code class="language-sh">$ php artisan migrate
</code></pre>
<p>Then we seed some data to work with:</p>
<pre><code class="language-sh">$ php artisan db:seed
</code></pre>
<p>And finally run:</p>
<pre><code class="language-sh">$ php artisan serve
</code></pre>
<p>This command should run the local server in the route: <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a><br>
And now have fun!</p>