/**
 * empty vertex shader
 */
 // the position of the point
 attribute vec3 a_position;

 //the color of the point
 attribute vec3 a_color;

 varying vec3 v_color;

 uniform mat4 u_modelView;
 uniform mat4 u_projection;

//like a C program main is the main function
void main() {
  //  gl_Position = vec4(0,0,0,1);
      gl_Position = u_projection * u_modelView   * vec4(a_position, 1);

    //just copy the input color to the output varying color
      v_color = vec3(0.05,0.61,0.19);
}
