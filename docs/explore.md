---
title: Explore
layout: support-page
permalink: /explore
description: "These are all the available standards available for compliance or to help evolve. Make sure you <a href='learn'>learn more</a> about standards' process if you decide to create a new one."
---
<div class="container">
    <div class="form-group">
        <div class="input-group">
            <div id="radioBtn" class="btn-group">
                <input id="filter" type="text" class="btn-sm" placeholder="Type to search...">
                <a class="btn btn-primary btn-sm active" data-toggle="searchby" data-title="standard-name">By name</a>
                <a class="btn btn-primary btn-sm notActive" data-toggle="searchby" data-title="standard-language">By language</a>
            </div>
            <input type="hidden" name="searchby" id="searchby" value="standard-name">
        </div>
    </div>
</div>

{% include standards-list.html %}
