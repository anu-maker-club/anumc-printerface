# anumc-printerface

This is a web-based 3D printer interface for the ANU Maker Club, written using
Meteor. The aim is to allow members to use a 3D printer from their own
desktops/laptops/phones/whatever.

The current plan is for the app itself to handle queueing/dequeuing of print
jobs, as well as storage of models. Slicing and interfacing with the printer
will be handled by [OctoPrint](http://octoprint.org/), which we can talk to
using an HTTP API. Eventually this system can be replaced with something a
little less hacky, but only once the basic idea has been validated and people
are actually using it :smile:
