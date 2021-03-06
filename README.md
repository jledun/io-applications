# io-applications

## What ?

Empty MVC project including :

* a fresh start of loopback API with local auth and loopback-sdk-builder set without realtime application
* a fresh start of an Angular 7 / Angular Material 7 application including loopback authentication and basic users management
* a fresh start of a nodeRED application

## Why ?

To start a brand new MVC application, node.js and loopback on the server, Angular 7+ for front view and nodeRED ready to run.

I'll try to add standards modules for fields, tables, buttons and every needed thing after commissionnings.

## How ?

Three parts :
* io-lbapp : loopback application, server side
* io-ngapp : front end application, building in static pages of loopback based on Angular 5 & bootstrap 4 & font-awesome 4
* io-ngapp/src/app/shared/lib : modules, services, components usefull and reusable for IO Systems Angular applications => this should be object for a different repository.

## dependencies

A few dependencies :
* node.js
* npm with build tools
* loopback-cli, @angular/cli and nodemon installed as a global packages (see below)

```bash 
$ npm install -g loopback-cli @angular/cli nodemon # as root
```

## Loopback models

Defaults included models :
* comment.json : all usefull comments for users, built by users themselves. There's no physical models in datasources, comments objects are embedded in all others models
* io-users.json : extends loopback built-in user model
* event.json : description of an generic event. Each event refers to an event type and a topic
* event-type.json : descriptions of the event types
* topic.json : descriptions of the topics, each topic can have a parent topic
* uom.json : units for your application
* uom-categ.json : category of units (length, weight, ...)

## install scripts

In root of the project, an install script does :
* install npm dependencies for Loopback project
* generate Angular Loopback SDK
* install npm dependencies for Angular 7 project
* build angular project then copy the result in the static folder of Loopback

in io-lbapp/server/scripts/ are a few install script to define a datasource then auto migrate all the models into this datasource.

You can also add default values for models (uom-categ, for example).

## TODO

Add usefull Angular modules, loopback logic and nodeRED flows for general uses

## Contributors

* Julien Ledun <j.ledun@iosystems.fr>

## MIT Licence 

Copyright 2019 IO Systems

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
