using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Parallax : MonoBehaviour
{
    // Start is called before the first frame update
    public float speed = 0.5f;
    Renderer element;
    void Start()
    {
        element = GetComponent<Renderer>();
    }

    // Update is called once per frame
    void Update()
    {
        element.material.mainTextureOffset += new Vector2(Time.deltaTime * speed, 0);
    }

}
