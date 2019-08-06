using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScrollingObject : MonoBehaviour
{
    // Start is called before the first frame update
    public float speed = -0.5f;
    private new Rigidbody2D rigidbody;

    private BoxCollider2D objectCollider;
    private float objectWidth;
    void Start()
    {
        rigidbody = GetComponent<Rigidbody2D>();
        rigidbody.velocity = new Vector2(speed, 0);
        objectCollider = GetComponent<BoxCollider2D>();
        objectWidth = objectCollider.size.x;
    }

    // Update is called once per frame
    void Update()
    {
        if (transform.position.x < -objectWidth)
        {
            Reposition();
        }
    }

    void Reposition()
    {
        Vector2 groundOffset = new Vector2(objectWidth * 2, 0);
        transform.position = (Vector2)transform.position + groundOffset;
    }
}
