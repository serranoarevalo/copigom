using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bear : MonoBehaviour
{

    public float yForce = 500f;
    private bool isDead = false;
    private new Rigidbody2D rigidbody;

    // Start is called before the first frame update
    void Start()
    {
        rigidbody = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {

        if (isDead == false)
        {
            if (Input.GetMouseButtonDown(0))
            {
                rigidbody.velocity = Vector2.zero;
                rigidbody.AddForce(new Vector2(0, yForce));
            }
        }

    }
}
