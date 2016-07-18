/**
 * Servlet code for xcos-on-web
 * Authors: Maverick and Adhitya
 * Description: The following servlet creates a shell command to run Scilab
 * without any GUI/simulation window. The diagram sent from client
 * is stored in a usr-xxx.xcos file and is then simulated.
 * The result is a .png file which is then sent back to the client.
 */

import java.io.*;
import javax.servlet.*;
import java.util.*;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import org.apache.commons.io.IOUtils;
import org.apache.commons.io.FilenameUtils;

public class SciExec extends GenericServlet {

    public void service(ServletRequest request, ServletResponse response) throws ServletException, IOException {
        PrintWriter pw = response.getWriter();

        InputStream is = null;
        ByteArrayOutputStream baos = null;
        List<String> commands = new ArrayList<String>();
        /**
         * Maverick and Srikant:
         * Creating a shell command to run Scilab without
         * any GUI so that the simulation window doesn't appear.
         */
        commands.add("scilab-adv-cli");
        commands.add("-noatomsautoload");
        commands.add("-nogui");
        commands.add("-nb");
        commands.add("-e");

        String imagePath = "";
        String fileNameWithoutExt = "";

        /**
         * Maverick:
         * Ignore the following block.
		 *
         * commands.add("plot3d();xs2png(gcf(),'img2.png');exit();"); String
         * data=request.getParameter("name"); pw.println(data);
         * commands.add("echo "+data+" >
         * /home/saarang/Softwares/apache-tomcat-8.0.36/webapps/sci/servlet/file.xcos");
         * commands.add("driver('PNG');xinit('/home/saarang/apache-tomcat-8.0.36/webapps/worknogui/servlet/ans"+k+".png');loadXcosLibs();importXcosDiagram('/home/saarang/apache-tomcat-8.0.36/file.xcos');xcos_simulate(scs_m,4);mode(2);xend();quit();");
         */
        ProcessBuilder pb = new ProcessBuilder(commands);
        try {
            InputStream inputStream = request.getInputStream();
            /**
             * Adhitya:
             * Creating a temporary file in the directory containing
             * tomcat. This is the .xcos file which will be executed by the
             * Scilab engine.
             */
            File xcosFile = File.createTempFile("usr-", ".xcos");
            OutputStream outputStream = new FileOutputStream(xcosFile);
            IOUtils.copy(inputStream, outputStream);
            outputStream.close();

            String tempPath = xcosFile.getAbsolutePath();

            String parentPath = xcosFile.getParent();
            fileNameWithoutExt = FilenameUtils.removeExtension(xcosFile.getName());

            /**
             * Maverick:
             * The resultant .png file which is produced as a result of
             * simulation is stored in a different folder inside the respective
             * webapp directory. The path of the folder is
             * /path/to/webapp/servlet.
             *
             * @ToDo: Modify the following path.
             */
            imagePath = "/path/to/webapps/xcos-on-web/servlet" + File.separator + fileNameWithoutExt + ".png";

            /**
             * Maverick:
             * Creating the command which is to be executed using terminal.
             */
            commands.add("driver('PNG');xinit('" + imagePath + "');loadXcosLibs();importXcosDiagram('" + tempPath + "');xcos_simulate(scs_m,4);mode(2);xend();quit();");

            /**
             * Maverick:			
             * Reference: http://stackoverflow.com/questions/23086778/how-to-access-unix-shell-special-variables-using-java
             * Starting a process to execute the created command.
             */
            Process prs = pb.start();
            is = prs.getInputStream();
            byte[] b = new byte[1024];
            int size = 0;
            baos = new ByteArrayOutputStream();
            while ((size = is.read(b)) != -1) {
                baos.write(b, 0, size);
            }
            System.out.println(new String(baos.toByteArray()));

        }
        catch (IOException e) {
            e.printStackTrace();
        }
        catch (Exception e) {
            pw.println("Exception");
        }
        finally {
            try {
                if (is != null) {
                    is.close();
                }
                if (baos != null) {
                    baos.close();
                }
            }
            catch (Exception ex) {
            }
        }
        /**
         * Maverick:
         * Accessing the .png file and sending it to the client.
         */
        pw.println("servlet/" + fileNameWithoutExt + ".png");
        pw.close();
    }
}
