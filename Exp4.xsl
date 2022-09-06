<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
	<head>
		<title> SJB Hospitality Services </title>
		<style>

			body{
			    /* The image used */
				  background:linear-gradient(rgba(180,180,180,0.3),rgba(200,200,200,0.3)), url("valley.jpg");

				  min-height: 300px;

				  /* Center and scale the image nicely */
				  background-position: center;
				  background-repeat: no-repeat;
				  background-size: cover;
				  
				  margin:0;
                }

			h2{
			    font-size: 69px;
			    font-weight: bold;
			    font-family:'Poppins', Arial, sans-serif;
			    color: darkgreen;
			    margin-top: 140px;
			    margin-bottom: 17px;
			    display:center;
			    text-align: center;
			}

			table{
			       margin:30px;
			}

			td{
			   color: darkgreen;
			}

		</style>
	</head>

<body>

	<h2> SJB Hospitality Services </h2>
	<table border = "1" >
		<tr>
	      <th style="text-align:center; color: darkgreen">PROPERTY NAME</th>
	      <th style="text-align:center; color: darkgreen">LOCATION</th>
	      <th style="text-align:center; color: darkgreen">TYPE</th>
	      <th style="text-align:center; color: darkgreen">AMENITIES</th>
	    </tr>
	    <xsl:for-each select="Hospitality_Services/properties">
	    <tr>
	      <td><xsl:value-of select="propertyname"/></td>
	      <td><xsl:value-of select="location"/></td>
	      <td><xsl:value-of select="type"/></td>
	      <td><xsl:value-of select="amenities"/></td>
	    </tr>
	    </xsl:for-each>
	</table>

</body>
</html>
</xsl:template>
</xsl:stylesheet>


