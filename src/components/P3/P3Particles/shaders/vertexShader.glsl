
uniform float uTime;
uniform float uSpeed;

// Get the towarding position
attribute vec3 toPos;
varying vec2 vUv;

void main () {

    vUv = uv;

    // vec3 pos = toPos;
    vec3 pos = position;

    // distance
    vec3 distance = toPos - position;

    // calc
    pos += distance * (sin(uTime * uSpeed) + 1.) * .5;


    vec4 modelPosition = modelMatrix * vec4(pos, 1.);

    vec4 viewPosition = viewMatrix * modelPosition;

    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;
    // gl_PointSize = 8.;
    gl_PointSize = 15.;
    // gl_PointSize *= 100. / -(modelViewMatrix * vec4(position, 1.));
    gl_PointSize *= ( 1. / - viewPosition.z );
}