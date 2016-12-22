# Xcos on Web
Xcos is an open source graphic simulator available with Scilab. Scilab can be installed on all major Operating Systems

The main aim of this project will be to port core functionalities of Xcos to a browser-only version that can be used without installing additional plugins or software.

## Installation

* Download the sources of Scilab 6 and replace modules/scicos_blocks/src/c/cscope.c with
 `https://github.com/kamakshidasan/scilab/blob/master/modules/scicos_blocks/src/c/cscope.c`
* After building, change the Scilab path in SendLog.py
* Host on Flask and run index.html

## License information
This project has a Creative Commons Public License.

For further information please refer to 'license.txt'-file

## Support and Contact

You can get support in the community mailing list and forums:

    https://groups.google.com/forum/#!forum/xcos-on-web

## Demo

An online demo can be found over here:

    https://xcos.fossee.in/

## Developers and Testers

* Amit Kumar Yadav, Motilal Nehru National Institute of Technology, Allahabad
* Chhavi Agarwal, National Institute of Technology, Kurukshetra
* Hrishikesh Hiraskar, National Institute of Technology Karnataka, Surathkal
* Jitesh Jha, Manipal Institute of Technology, Manipal
* Kumar Saarang Singh, Manipal Institute of Technology, Manipal
* Nimish Singhal, Manipal Institute of Technology, Manipal
* Pooja Soundalgekar, National Institute of Technology Karnataka, Surathkal
* Supritha Suresh, Visvesvaraya Technological University, Karnataka
* Vishnu Nair, Indian Institute of Technology, Bombay
* Adhitya Kamakshidasan, Visvesvaraya National Institute of Technology, Nagpur
