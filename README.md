## dservice.js
<p>
    I've created a nice jQuery script that includes my favorites events, triggers and what not. You can download it here or you can include the below snippet just before <code>&lt;/head&gt;</code>.<br/>
    You are also welcome to fork this on my github, click <a href="https://github.com/dimitrigogios" target="_blank">here</a>.
    <br/>
    <br/>
    Use this snippet:
    <br/>
    <pre><code>&lt;script src&#61;&quot;dimitrigogios.com/dservice/dservice.js&quot; rel&#61;&quot;nofollow&quot;&gt;&lt;/script&gt;</code></pre>
    <br/>
    <br/>
    <br/>
</p>
<h2>What does Dservice do?</h2>
<p>
    Dservice has <strong>5</strong> nice functions:
    <ul class="list-unstyled dservice-list">
        <li>
            <strong>1.</strong> <code>dservice.isMobile()</code>
        </li>
        <li>
            <strong>2.</strong> <code>dservice.isLandscape()</code>
        </li>
        <li>
            <strong>3.</strong> <code>dservice.toTop()</code>/<code>dservice.toTopMobile()</code>
        </li>
        <li>
            <strong>4.</strong> <code>dservice.footerControl()</code>
        </li>
        <li>
            <strong>5.</strong> <code>dservice.userInteraction()</code>
            <br/>
            <i class="block">Events triggered by scrolling</i>
            <ul>
                <li><code>scrollUp</code></li>
                <li><code>scrollDown</code></li>
                <li><code>scrollEnded</code></li>
            </ul>
            <br/>
            <i class="block">Event triggered when window-resize is finished</i>
            <ul>
                <li><code>windowResizeEnded</code></li>
            </ul>
        </li>
    </ul> 
</p>
<br/>
<br/>
<br/>
<h3>dservice.isMobile()</h3>
<p>
    When using <code>dservice.isMobile()</code> the functions checks on whether or not the device is either of: <code>Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i</code>, if <code>true</code> the function will add a class, <code>is-mobile</code> to <code>body</code>.
</p>
<br/>
<br/>
<br/>
<h3>dservice.isLandscape()</h3>
<p>
    When using <code>dservice.isLandscape()</code> the functions checks on whether or not the width of the window device is larger than the height of the window and if the device is a mobile. If all <code>true</code> the function will add a class, <code>landscape</code> to <code>body</code>.<br/>
    The functions is default activated when using <code>dservice.js</code>.
</p>
<br/>
<br/>
<br/>
<h3>dservice.toTop()/dservice.toTopMobile()</h3>
<p>
    Simply by having a class <code>to-top</code> on an element will make these functions active, <code>dservice.toTop()</code>/<code>dservice.toTopMobile()</code>. When not on a mobile device dservice will use <code>dservice.toTop()</code> and vice verse on a mobile device <code>dservice.toTopMobile()</code> will be used.
</p>
<br/>
<br/>
<br/>
<h3>dservice.footerControl()</h3>
<p>
    If you are using a html <code>&lt;footer /&gt;</code> element and this footer element has the css property <code>position: absolute;</code>, then the function will automatically add the appropriate <code>padding-bottom</code> to the <code>body</code>.<br/>
    The function automatically measure the height of the footer and add this height as a padding-bottom to body.
</p>
<br/>
<br/>
<br/>
<h3>dservice.userInteraction()</h3>
<p>
    When the user is scrolling there are 3 "events" that are nice to add functionality to. Theese 3 "events" are:<br/>
    <ul>
        <li>When user is scolling up, <code>scrollUp</code></li>
        <li>When user is scolling down, <code>scrollDown</code></li>
        <li>When the scrolling has ended, <code>scrollEnded</code></li>
    </ul><br/>
    If the user resizes the browser then this "event" will also be catched by <code>dservice</code>.
    <br/> 
    <br/> 
    <code>dservice.js</code> automatically triggers <code>document</code> events, <code>scrollUp</code>, <code>scrollDown</code>, <code>scrollEnded</code> and <code>windowResizeEnded</code>.
</p>
<br/>
<br/>
<br/>
<h2>More about Dservice</h2>
<p>
    <code>dservice.js</code> is depended on jQuery library. <code>dservice.js</code> will detect whether or not if the site has included <code>jQuery</code>. If not included then <code>dservice.js</code> will load <code>jQuery</code> into the header.<br/>
    And, if <code>jQuery</code> is already included by the site, then <code>jQuery</code> will not also be included by <code>dservice.js</code>.<br/>
</p>

## License
The MIT License (MIT)

**Copyright (c) 2016 DimitriGogios**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

The software is provided "as is", without warranty of any kind, express or
implied, including but not limited to the warranties of merchantability,
fitness for a particular purpose and noninfringement. in no event shall the
authors or copyright holders be liable for any claim, damages or other
liability, whether in an action of contract, tort or otherwise, arising from,
out of or in connection with the software or the use or other dealings in the
software.