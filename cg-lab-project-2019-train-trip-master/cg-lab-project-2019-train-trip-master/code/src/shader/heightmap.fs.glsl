/**
 * a phong shader implementation with texture support
 */
precision mediump float;

/**
 * definition of a material structure containing common properties
 */
struct Material {
	vec4 ambient;
	vec4 diffuse;
	vec4 specular;
	vec4 emission;
	float shininess;
};

/**
 * definition of the light properties related to material properties
 */
struct Light {
	vec4 ambient;
	vec4 diffuse;
	vec4 specular;
};

//illumination related variables
uniform Material u_material;
uniform Light u_light;
varying vec3 v_normalVec;
varying vec3 v_eyeVec;
varying vec3 v_lightVec;

//texture related variables
uniform bool u_enableObjectTexture; //note: boolean flags are a simple but not the best option to handle textured and untextured objects
//define texture sampler and texture coordinates
varying vec2 v_texCoord;
varying float yAmount;
//interpolate argument between vertex and fragment shader (!!! ALWAYS UNDER VARIABLES)
varying vec3 v_color;
uniform sampler2D u_tex;
uniform sampler2D u_texture1;
uniform sampler2D u_texture2;
uniform sampler2D u_texture3;
uniform sampler2D u_texture4;
uniform sampler2D u_texture5;

vec4 calculateSimplePointLight(Light light, Material material,
        vec3 lightVec, vec3 normalVec, vec3 eyeVec, vec4 textureColor) {
	// You can find all built-in functions (min, max, clamp, reflect, normalize, etc.)
	// and variables (gl_FragCoord, gl_Position) in the OpenGL Shading Language Specification:
	// https://www.khronos.org/registry/OpenGL/specs/gl/GLSLangSpec.4.60.html#built-in-functions
	lightVec = normalize(lightVec);
	normalVec = normalize(normalVec);
	eyeVec = normalize(eyeVec);

	//compute diffuse term
	float diffuse = max(dot(normalVec,lightVec),0.0);

	//compute specular term
	vec3 reflectVec = reflect(-lightVec,normalVec);
	float spec = pow( max( dot(reflectVec, eyeVec), 0.0) , material.shininess);

  if(u_enableObjectTexture)
  {
    //replace diffuse and ambient material color with texture color
    material.diffuse *= textureColor;
    material.ambient *= textureColor;
		//Note: an alternative to replacing the material color is to multiply it with the texture color
  }

	vec4 c_amb  = clamp(light.ambient * material.ambient, 0.0, 1.0);
	vec4 c_diff = clamp(diffuse * light.diffuse * material.diffuse, 0.0, 1.0);
	vec4 c_spec = clamp(spec * light.specular * material.specular, 0.0, 1.0);
	vec4 c_em   = material.emission;

  return c_amb + c_diff + c_spec + c_em;
}

void main (void) {
  ///Loading the splatmap and the diffuse textures
  vec4 texture4 = texture2D(u_texture4, v_texCoord);

  gl_FragColor = texture4;

}
